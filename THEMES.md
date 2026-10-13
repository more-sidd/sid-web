# Themes

This site gets redesigned from time to time. Each finished look is kept, so
nothing is lost and any of them can be brought back.

## How a theme is preserved

Two things on every theme, because they do different jobs:

| | What it is | Why both |
| --- | --- | --- |
| **Tag** (`v1-lemon`) | A permanent, frozen marker | Never moves. This is the real snapshot |
| **Branch** (`lemon`) | A working copy of the same commit | Can be checked out and tinkered with without touching the tag |

A branch can be moved or deleted by accident. A tag is the safety net.

---

## The themes so far

### `lemon` — Oct 2026

Tag `v1-lemon` · branch `lemon` · commit `f8d52a5`

Warm and bright. Lemon Cream page, Vanilla Tint cards, deep berry ink, a
soft-serif display face.

| | |
| --- | --- |
| Page | `#FFF6C1` Lemon Cream |
| Cards | `#FFF9E3` Vanilla Tint |
| Text | `#901243` berry |
| Links | `#3363C0` blue |
| Display | Fraunces, using its `SOFT` and `WONK` axes |
| Body | Plus Jakarta Sans |

Built in this theme and carried forward:

- Nav grouped into six: About · Background · Work · Writing · Gallery · Contact
- Gallery in two buckets, autoplaying, with a manual viewer
- Blog and News sharing one post page and one comment system
- Hand-drawn avatar as the logo and favicon
- Stat tiles derived from the data rather than typed in

### `ereader` — in progress

A reading-first look: paper background, high contrast, strong typographic
hierarchy, very little colour.

---

## Looking at an old theme

See it without changing anything you are working on:

```bash
git switch --detach v1-lemon
```

```bash
npm install && npm run dev
```

Then go back to where you were:

```bash
git switch -
```

## Bringing an old theme back

If a redesign does not work out and you want lemon live again:

```bash
git switch main && git revert --no-commit v1-lemon..HEAD && git commit
```

That writes a new commit undoing everything since lemon, which keeps the
history intact. It does **not** erase the work in between, so you can still
go and look at it.

## Starting the next theme

1. Branch from main: `git switch -c <name>`
2. Build it there, so main keeps working while you do
3. When it is finished, merge to main and tag it: `git tag -a v2-<name> -m "..."`
4. Add a section above so the next person (you, in six months) can find it

---

## What a theme actually touches

Mostly two files, which is what makes this swappable at all:

| File | Holds |
| --- | --- |
| [`src/index.css`](src/index.css) | Colour tokens (`:root` and `html.dark`), type, every component style |
| [`src/blog.css`](src/blog.css) | Blog and news cards, the post page |

Content lives in `src/data/portfolioData.ts`, `src/content/blog/` and
`src/content/news/`, and is **not** part of a theme. Switching themes should
never mean retyping your projects.
