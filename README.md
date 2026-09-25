# Siddhi More — portfolio site

A schematic map of this site: **what you want to change → the one file that
controls it.** Start with the table below; everything after it is detail.

- Writing guide → **[BLOG.md](BLOG.md)**
- Turning comments on → **[BLOG-SETUP.md](BLOG-SETUP.md)**

---

## 1. "I want to change…" → go here

| I want to change | Edit this | Notes |
| --- | --- | --- |
| My name, tagline, email, links, resume, **photos** | [`src/data/portfolioData.ts`](src/data/portfolioData.ts) | `personalInfo` at the top |
| A **project** (title, description, results, images) | [`src/data/portfolioData.ts`](src/data/portfolioData.ts) | `projects` array |
| **Experience / education / publications / skills** | [`src/data/portfolioData.ts`](src/data/portfolioData.ts) | one array each |
| **Gallery** photos | [`src/data/portfolioData.ts`](src/data/portfolioData.ts) | `galleryImages` array |
| Write a **blog post** | new `.md` in [`src/content/blog/`](src/content/blog/) | see [BLOG.md](BLOG.md) |
| Write a **news item** | new `.md` in [`src/content/news/`](src/content/news/) | same format, different folder |
| **Colours** (light + dark) | [`src/index.css`](src/index.css) | the two token blocks — see §4 |
| **Fonts** | [`src/index.css`](src/index.css) | `@import` on line 1, then `--display` / `--body` |
| **Section order** | [`src/App.tsx`](src/App.tsx) | reorder the JSX — see §3 |
| **Nav menu** | [`src/components/Nav.tsx`](src/components/Nav.tsx) | the `LINKS` array — see §3 |
| Section **numbers** (01 —, 02 —) | each section component | hardcoded per file — see §3 |
| Read / delete **comments** | `yoursite.com/#/blog-admin` | needs [BLOG-SETUP.md](BLOG-SETUP.md) |

---

## 2. Where things live

| Path | What it is |
| --- | --- |
| [`src/data/portfolioData.ts`](src/data/portfolioData.ts) | **All CV content.** Most edits happen here |
| [`src/content/blog/`](src/content/blog/) | Blog posts, one `.md` each |
| [`src/content/news/`](src/content/news/) | News items, one `.md` each |
| `public/gallery/` | Gallery + project + news photos |
| `public/blog/`, `public/news/` | Images for posts |
| [`src/index.css`](src/index.css) | Design tokens + all site styles |
| [`src/blog.css`](src/blog.css) | Blog/news card + post-page styles |
| [`src/components/`](src/components/) | One file per section |
| [`src/lib/posts.ts`](src/lib/posts.ts) | Loads and parses the markdown |
| [`src/lib/useHashRoute.ts`](src/lib/useHashRoute.ts) | `#/blog/slug` routing |
| [`supabase/schema.sql`](supabase/schema.sql) | Comments database |

---

## 3. Sections — order, nav and numbering

These are **three separate places** and they must agree. This has drifted
before, so check all three when you reorder.

| # | Section | Component | Nav group |
| --- | --- | --- | --- |
| — | Hero | `Hero.tsx` | — |
| 01 | About | `About.tsx` | About |
| 02 | Experience | `Experience.tsx` | Work |
| 03 | Projects | `Projects.tsx` | Work |
| 04 | Skills | `Skills.tsx` | Work |
| 05 | Gallery | `Gallery.tsx` | Gallery |
| 06 | Writing | `Blog.tsx` | Writing |
| 07 | News | `News.tsx` | Writing |
| 08 | Education | `Education.tsx` | Background |
| 09 | Publications | `Publications.tsx` | Background |
| 10 | Contact | `Contact.tsx` | Contact |

**To reorder:**

1. Move the component line in [`src/App.tsx`](src/App.tsx)
2. Update `LINKS` in [`src/components/Nav.tsx`](src/components/Nav.tsx) — each
   entry has a `target` (where it scrolls) and `covers` (every section the
   group owns, so the right item stays highlighted)
3. Renumber the `<p className="label">NN — Name</p>` line in each affected
   component

Blog and News labels are props on `<PostGrid>` rather than inline, so change
them in `Blog.tsx` / `News.tsx`.

---

## 4. Colour and type

One place for each. Both themes live in [`src/index.css`](src/index.css): the
`:root` block is light, the `html.dark` block is dark.

### Current palette

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--paper` | `#FFF6C1` Lemon Cream | `#12182A` navy | Page background |
| `--surface` | `#FFF9E3` Vanilla Tint | `#1C2540` | Cards, highlights |
| `--ink` | `#901243` berry | `#CFDAEE` | Body text |
| `--ink-2` | `#C5195C` | `#93ABD9` Blueberry | Secondary text |
| `--accent` | `#3363C0` | `#EDE986` lemon | Links, labels |
| `--accent-fill` | `#901243` | `#EDE986` | Button background |
| `--border` | `#DFCB8A` | `#2A3654` | Hairlines |

### The one rule that matters

**Pastels can't carry text.** On the lemon page, Blueberry Milk measures
1.49:1 and Lemon Cream 1.08:1 against each other — far below the 4.5:1
minimum. That's why `--accent` is a *darkened* blueberry rather than the raw
pastel, and why buttons use the berry ink with light text on top.

If you change a colour, check it. Quick way — paste both hex values into
[WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/):

| Use | Minimum |
| --- | --- |
| Body text | 4.5 : 1 |
| Large text (24px+, or 19px+ bold) | 3 : 1 |
| Input borders, focus rings | 3 : 1 |
| Decorative lines, dividers | no minimum |

Also note **Vanilla Tint lifts off Lemon Cream by only 1.04:1** — cards are
separated by the `--border` hairline, not by the fill. Remove the border and
they vanish into the page.

### Fonts

| Token | Font | Used for |
| --- | --- | --- |
| `--display` | Fraunces (variable, `SOFT` + `WONK` axes) | Hero name, section headings, logo |
| `--body` | Plus Jakarta Sans | Everything else |

Both load from Google Fonts on line 1 of `index.css` — nothing to install.
The serif is **display-only**; card titles and body copy use the sans, which
is what keeps it readable rather than decorative.

---

## 5. Running and deploying

```bash
npm install
```

```bash
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local preview, usually `http://localhost:5173` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built output |
| `npm run typecheck` | TypeScript check (does not run during build) |
| `npm run lint` | ESLint |

`npm run build` does **not** typecheck — run `npm run typecheck` separately
before you push if you've touched `.ts`/`.tsx`.

---

## 6. Things that have broken before

| Symptom | Cause | Fix |
| --- | --- | --- |
| Image works locally, 404s live | Capital letters in the filename. Windows ignores case, the server doesn't | Lowercase, hyphenated filenames |
| Post doesn't appear | `draft: true`, or wrong folder, or bad `date:` | Check the settings block |
| Posts in the wrong order | `date:` isn't `YYYY-MM-DD` | Fix the format |
| Section number out of sequence | Renumbered in one file but not the rest | See §3 |
| Nav highlights nothing | Both files' `covers` arrays are stale | See §3 |
| Two posts, one unreachable | Same filename in `content/blog` and `content/news` — they share the `#/blog/<slug>` URL space | Rename one. The dev server logs a warning |
| Post title shows as the filename (`st-mems-workshop`), no date or cover | Stale Vite cache after moving a post between `content/blog` and `content/news`. The file is fine; the dev server is holding an empty copy | Stop the server, `rm -rf node_modules/.vite`, start it again |
| Cards invisible against the page | `--border` removed; the fill alone is only 1.04:1 | Keep the hairline |

---

## 7. Change log

Append a row when you change something worth remembering.

| Date | What changed | Files |
| --- | --- | --- |
| 2026-09-25 | Added News section (`content/news/`), shares the blog post page and comments | `News.tsx`, `PostGrid.tsx`, `lib/posts.ts` |
| 2026-09-25 | Palette → Lemon Cream / Vanilla Tint / berry ink; Fraunces for display | `index.css` |
| 2026-09-25 | Nav consolidated from 10 links to 6 groups | `Nav.tsx` |
| 2026-09-25 | About → photo, bio, photo (one image each side) | `About.tsx`, `index.css` |

---

## 8. Stack

React 18 · TypeScript · Vite · Tailwind (utilities only — the design system is
plain CSS variables in `index.css`) · Supabase for comments · react-markdown
for post bodies.

Routing is hash-based (`#/blog/slug`) with no router dependency, so deep links
work on any static host with no rewrite rules.
