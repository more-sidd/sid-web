import type { BlogPost } from '../types';

/**
 * Posts live in two folders and the folder decides which section shows them:
 *   src/content/blog/  -> the Blog section
 *   src/content/news/  -> the News section
 *
 * Both render through the same post page and share the same comment system,
 * so a news item still lives at #/blog/<slug>. Adding one is: drop a .md file
 * in the right folder, commit, push. No index to update.
 */
const blogFiles = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const newsFiles = import.meta.glob('../content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

/** Minimal frontmatter parser: `key: value` plus `[a, b]` inline arrays. */
function parseFrontmatter(raw: string): { meta: Record<string, unknown>; body: string } {
  const match = raw.match(FRONTMATTER);
  if (!match) return { meta: {}, body: raw };

  const meta: Record<string, unknown> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (!kv) continue;

    const key = kv[1];
    let value: unknown = kv[2].trim();

    if (typeof value === 'string') {
      // Strip matching surrounding quotes.
      value = value.replace(/^["'](.*)["']$/, '$1');
    }

    const str = value as string;
    if (/^\[.*\]$/.test(str)) {
      value = str
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^["'](.*)["']$/, '$1'))
        .filter(Boolean);
    } else if (str === 'true' || str === 'false') {
      value = str === 'true';
    }

    meta[key] = value;
  }

  return { meta, body: raw.slice(match[0].length) };
}

/** ~200 wpm, rounded up, so the card can show "4 min read". */
function readingTime(body: string): number {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function firstParagraph(body: string): string {
  const text = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^#{1,6}\s.*$/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/<[^>]+>/g, '')
    .trim();
  const para = text.split(/\n\s*\n/)[0] ?? '';
  return para.replace(/\s+/g, ' ').slice(0, 200);
}

function build(files: Record<string, string>, kind: 'blog' | 'news'): BlogPost[] {
  const built = Object.entries(files).map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { meta, body } = parseFrontmatter(raw);

    return {
      slug,
      kind,
      title: (meta.title as string) || slug,
      date: (meta.date as string) || '',
      excerpt: (meta.excerpt as string) || firstParagraph(body),
      tags: (meta.tags as string[]) || [],
      cover: meta.cover as string | undefined,
      coverAlt: meta.coverAlt as string | undefined,
      draft: meta.draft === true,
      readingTime: readingTime(body),
      body,
    } satisfies BlogPost;
  });

  // Drafts never reach the built site.
  return built
    .filter(x => !x.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const posts: BlogPost[] = build(blogFiles, 'blog');
export const news:  BlogPost[] = build(newsFiles, 'news');

/** Everything, for slug lookup — both kinds share the #/blog/<slug> route. */
export const allPosts: BlogPost[] = [...posts, ...news];

if (import.meta.env.DEV) {
  // Both folders feed one URL space, so a shared filename would make one of
  // the two unreachable. Cheap to catch here rather than as a missing page.
  const seen = new Set<string>();
  for (const x of allPosts) {
    if (seen.has(x.slug)) {
      console.warn(
        `[posts] Duplicate slug "${x.slug}" in both content/blog and content/news. ` +
        'Rename one — they share the #/blog/<slug> URL space.'
      );
    }
    seen.add(x.slug);
  }
}

export function getPost(slug: string): BlogPost | undefined {
  return allPosts.find(x => x.slug === slug);
}

const tagsOf = (list: BlogPost[]) => [...new Set(list.flatMap(x => x.tags))].sort();
export const allTags:  string[] = tagsOf(posts);
export const newsTags: string[] = tagsOf(news);

export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso + (iso.length === 10 ? 'T12:00:00' : ''));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
