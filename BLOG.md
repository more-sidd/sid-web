# Your Blog — the everyday guide

Plain-English guide to writing posts and checking comments.
For one-time setup (connecting comments), see **[BLOG-SETUP.md](BLOG-SETUP.md)**.

---

## The 30-second version

| Thing | Where |
| --- | --- |
| Your posts | `src/content/blog/` — one `.md` file per post |
| Photos & videos for posts | `public/blog/` |
| Read comments / delete spam | `yoursite.com/#/blog-admin` |

To publish: save the file, commit, push. The site rebuilds and it's live.

---

## Writing a new post

**1.** Make a new file in `src/content/blog/`. Name it what you want the web
address to be, all lowercase with hyphens:

```
src/content/blog/gearbox-lessons.md
```

That becomes `yoursite.com/#/blog/gearbox-lessons`

**2.** Paste this in and edit it:

```markdown
---
title: What I Learned Designing a Gearbox
date: 2026-08-17
excerpt: One or two sentences that show on the card.
tags: [Robotics, Build Log]
draft: false
---

Start writing here. Just type normally.

## A section heading

More writing. Leave a blank line between paragraphs.
```

**3.** Save, commit, push. Done.

---

## The settings block at the top

Everything between the two `---` lines is settings, not content.

| Line | Do I need it? | What it does |
| --- | --- | --- |
| `title:` | **Yes** | The post title |
| `date:` | Recommended | Newest posts show first. Format: `2026-08-17` |
| `excerpt:` | Optional | The preview text on the card. Skip it and your first paragraph is used |
| `tags:` | Optional | Creates the filter buttons. `tags: [Robotics, Notes]` |
| `cover:` | Optional | Big image at the top. `cover: /blog/my-photo.jpg` |
| `coverAlt:` | If using cover | Describes the image for screen readers |
| `draft:` | Optional | `draft: true` hides the post from the site |

---

## Formatting your writing

You type plain text. A few symbols add formatting:

```markdown
**bold**  and  *italic*

## Big heading
### Smaller heading

- a bullet
- another bullet

1. numbered
2. list

[a link](https://example.com)

> A quote, indented with a line down the side.
```

Leave a **blank line** between paragraphs, or they run together.

---

## Adding a photo

**1.** Put the image file in `public/blog/`
**2.** Reference it in your post with a `/blog/` path:

```markdown
![The finished gearbox on the test rig](/blog/gearbox.jpg)
```

The text in the square brackets becomes the caption under the photo, and is
what screen readers announce — so describe what's actually in the picture.

**Name image files in lowercase with hyphens** — `gearbox-v2.jpg`, not
`Gearbox V2.jpg`. Capital letters and spaces in filenames caused every image
on your site to break once already.

---

## Adding a video

**YouTube** (easiest, and doesn't use your hosting bandwidth):

```html
<div class="post-video">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
          title="Gearbox test run" allowfullscreen></iframe>
</div>
```

Get `VIDEO_ID` from the YouTube URL — it's the part after `v=`.

**A video file of your own:** put it in `public/blog/`, then:

```html
<video controls preload="metadata">
  <source src="/blog/test-run.mp4" type="video/mp4" />
</video>
```

Keep self-hosted video short. Long files eat your hosting bandwidth.

---

## Editing, hiding, deleting

**Edit a post** — open the `.md` file, change it, save, push. Same as writing.

**Hide a post but keep the file** — change its settings block to `draft: true`.
It vanishes from the site; the file stays in your repo.

**Delete a post** — delete the `.md` file. Its tag disappears from the filter
buttons automatically.

**Careful:** if you change a *filename*, the web address changes too. Anyone
who shared the old link gets a "Post not found" page. Rename only if nobody
has the link yet.

---

## Reading and moderating comments

> Comments aren't connected yet. Do the one-time setup in
> **[BLOG-SETUP.md](BLOG-SETUP.md)** first. Until then, the comment box shows
> a "not connected" note and nothing breaks.

Once set up:

**Go to** `yoursite.com/#/blog-admin` and sign in.

You'll see every comment, newest first, with which post it's on. For each one:

| Button | What happens |
| --- | --- |
| **Hide** | Public can't see it. You keep the text. Use this for spam |
| **Unhide** | Puts it back |
| **Delete** | Gone permanently. Can't be undone |

Filter by **all / visible / hidden** at the top.

**Prefer Hide over Delete.** Hiding is reversible; deleting isn't. There's no
undo and no trash.

This page is safe to leave public — a stranger who opens the URL just gets a
login screen, and the permissions are enforced by the database, not by the
page being secret.

### Anyone can comment without an account

That's how you asked for it. Spam protection is already running in the
background: a trap field invisible to humans, a 3-second minimum before a
comment can be submitted, a cap of 3 comments per person every 5 minutes, and
duplicate comments blocked. You don't have to do anything to turn these on.

You will still get some spam eventually. Hide it and move on.

---

## Stats — what you can and can't see

Being straight with you: **there is no visitor tracking on your site.** No
page views, no visitor counts, no "which post is popular." That was never
built. Here's what you actually have:

### What you can see today

**Comment count per post** — shown next to "Comments" at the bottom of each
post, and the admin page lists them all.

**All comments in one place** — the `#/blog-admin` page.

**A count per post** — in your Supabase dashboard, open the SQL Editor and run:

```sql
select post_slug, count(*) as comments, max(created_at) as latest
from comments
where is_hidden = false
group by post_slug
order by comments desc;
```

### What you'd need to add for real stats

To know how many people read a post, you need an analytics tool. The easiest
options, roughly in order of least effort:

| Option | Effort | Notes |
| --- | --- | --- |
| Vercel or Netlify Analytics | Flip a switch | Only if you host there. Paid on some plans |
| Cloudflare Web Analytics | Add one script tag | Free, no cookies, privacy-friendly |
| Plausible / Fathom | One script tag | Paid, very clean, privacy-friendly |
| Google Analytics | One script tag | Free, powerful, heavier and cookie-based |

If you want page views, say so and I'll wire one up — it's a small change.

---

## Where you are right now

- [x] Blog section is live with 1 post
- [x] Comment box appears on posts (shows "not connected" for now)
- [ ] **Comments connected** — needs [BLOG-SETUP.md](BLOG-SETUP.md)
- [ ] **Delight font** — needs the file, see [public/fonts/README.md](public/fonts/README.md)
- [ ] Visitor stats — not built, see above

---

## When something goes wrong

| What you see | What's usually wrong |
| --- | --- |
| Post doesn't appear | `draft: true` is set, or the file isn't in `src/content/blog/`, or it doesn't end in `.md` |
| Post is in the wrong order | Check `date:` — format must be `2026-08-17`. Missing dates sort last |
| Broken image icon | Filename doesn't match exactly. Check capitals, spaces, and that it's `.jpg` not `.jpeg` |
| Image missing after deploy | Capital letters in the filename. Your host is case-sensitive even though Windows isn't |
| Everything after a certain point looks like one big paragraph | You need a blank line between paragraphs |
| Post shows raw `---` and settings as text | The settings block must be the very first thing in the file, no blank line above it |
| Comment box says "not connected" | Expected until you do [BLOG-SETUP.md](BLOG-SETUP.md) |
| Site fonts look plain/generic | The Delight file isn't installed yet |

---

## Previewing before you publish

To see changes on your own machine before pushing:

```bash
cd "C:\Users\siddh\Desktop\siddhi web\sid-web" && npm run dev
```

Then open the address it prints (usually `http://localhost:5173`). Edits show
up as soon as you save. Press `Ctrl+C` in the terminal to stop it.
