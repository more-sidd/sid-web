# Blog — how it works

Posts are markdown files in this repo. Comments live in Supabase.

---

## Writing a post

1. Create `src/content/blog/my-post-slug.md`
2. Start it with a frontmatter block:

```markdown
---
title: What I Learned Debugging I2C at 2am
date: 2026-08-20
excerpt: One or two sentences shown on the card on the home page.
tags: [Robotics, Build Log]
cover: /blog/i2c-scope.jpg
coverAlt: Oscilloscope trace of a clock-stretched I2C transaction
draft: false
---

Your post body starts here.
```

3. Put any images or video in `public/blog/`
4. Commit and push. The site rebuilds and the post is live.

The **filename is the URL**: `my-post-slug.md` → `yoursite.com/#/blog/my-post-slug`

Only `title` is required. Skip `excerpt` and the first paragraph is used. Set
`draft: true` to keep a file in the repo but off the live site. Posts sort newest
first by `date`.

`src/content/blog/formatting-guide.md` is a live cheat sheet covering images,
video embeds, tables, and code blocks — delete it once you don't need it.

---

## Turning on comments

Comments are optional. Without the steps below the blog works fine; the comment
box just shows a "not connected" note.

### 1. Create the Supabase project

At [supabase.com](https://supabase.com), create a project. Then go to
**Project Settings → API** and copy the **Project URL** and the **anon public** key.

### 2. Add the keys locally

```bash
cp .env.example .env
```

Fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. `.env` is gitignored.

The anon key is *meant* to be public — it ships inside the JavaScript bundle. What
protects your data is the Row Level Security policy in the next step, not secrecy
of this key. **Never** put the `service_role` key in this file.

### 3. Create the table

Open the **SQL Editor** in Supabase, paste the whole of `supabase/schema.sql`, and
run it.

Before running, change the email on this line to your Supabase account email:

```sql
select coalesce(auth.jwt() ->> 'email', '') = 'more.sidd@northeastern.edu';
```

That single line is what decides who is allowed to moderate.

### 4. Create your moderator account

In Supabase → **Authentication → Users → Add user**, create a user with that same
email and a strong password.

Then go to **Authentication → Providers → Email** and **turn off "Enable sign
ups"**. Otherwise strangers could register accounts on your project.

### 5. Add the keys to your host

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables in
Netlify / Vercel / wherever you deploy, then redeploy. Vite bakes env vars in at
build time, so a rebuild is required — setting them isn't enough on its own.

---

## Moderating

Go to `yoursite.com/#/blog-admin` and sign in with the account from step 4.

You can filter all / visible / hidden, **Hide** a comment (it disappears for the
public but you keep the text), or **Delete** it permanently.

The page is safe to leave publicly reachable. The hide and delete permissions are
enforced by database policies, not by hiding the URL — a stranger who loads it
sees only a login form, and even a signed-in non-owner account can do nothing.

---

## What stops spam

| Layer | What it does |
| --- | --- |
| Honeypot field | An invisible input; bots fill it, humans can't see it. Silently dropped. |
| Submit timer | Posts submitted under 3 seconds after load are dropped. |
| Rate limit | Max 3 comments per IP per 5 minutes, enforced in a database trigger. |
| Duplicate block | The same text on the same post within an hour is rejected. |
| Length limits | Name ≤ 50 chars, comment ≤ 2000, enforced by database constraints. |
| Hide, don't delete | Spam can be hidden from the public without losing the record. |

Commenter IPs are stored for rate limiting only. They are **not** readable by the
public — that's enforced with column-level `GRANT`s in the schema, so even a
hand-crafted API request can't retrieve them.

This is real spam resistance, not a guarantee. If the blog ever gets popular
enough to attract determined spammers, the next step would be requiring approval
before comments appear — a one-line change to the insert trigger
(`new.is_hidden := true`) plus using the admin page to approve them.

---

## Files

| Path | Purpose |
| --- | --- |
| `src/content/blog/*.md` | Your posts |
| `public/blog/` | Images and video for posts |
| `src/lib/posts.ts` | Loads and parses the markdown at build time |
| `src/lib/supabase.ts` | Supabase client (null when unconfigured) |
| `src/lib/useHashRoute.ts` | `#/blog/slug` routing, no router dependency |
| `src/components/Blog.tsx` | The section on the home page |
| `src/components/BlogPost.tsx` | Full post page |
| `src/components/Comments.tsx` | Public comment list and form |
| `src/components/CommentsAdmin.tsx` | Moderation page |
| `src/blog.css` | All blog styles |
| `supabase/schema.sql` | Database table, policies, anti-spam trigger |
