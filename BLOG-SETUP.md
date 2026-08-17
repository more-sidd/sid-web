# Blog setup — one-time technical steps

You only do this once, to turn comments on. For day-to-day writing see
**[BLOG.md](BLOG.md)**.

Skipping this is fine — the blog works without it. The comment box just shows
a "not connected" note.

---

## Turning on comments

### 1. Create the Supabase project

At [supabase.com](https://supabase.com), create a project. Go to
**Project Settings → API** and copy the **Project URL** and the **anon public**
key.

### 2. Add the keys locally

```bash
cp .env.example .env
```

Fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. `.env` is gitignored,
so it won't be committed.

The anon key is *meant* to be public — it ships inside the JavaScript bundle
and anyone can read it. What protects your data is the Row Level Security
policy in the next step, not secrecy of this key. **Never** put the
`service_role` key in this file.

### 3. Create the table

Open the **SQL Editor** in Supabase, paste in all of
[`supabase/schema.sql`](supabase/schema.sql), and run it.

Before running, change the email on this line to your Supabase account email:

```sql
select coalesce(auth.jwt() ->> 'email', '') = 'more.sidd@northeastern.edu';
```

That one line decides who is allowed to moderate.

### 4. Create your moderator account

In Supabase → **Authentication → Users → Add user**, create a user with that
same email and a strong password.

Then go to **Authentication → Providers → Email** and **turn off "Enable sign
ups"**. Otherwise strangers could register accounts on your project.

### 5. Add the keys to your host

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables
in Netlify / Vercel / wherever you deploy, then redeploy.

Vite bakes environment variables in at **build time**, so setting them isn't
enough on its own — you need a rebuild.

### 6. Check it worked

Open a post on the live site. The comment box should accept a comment. Then go
to `/#/blog-admin`, sign in, and confirm you can see it.

---

## How the security works

Worth understanding, since comments are open to anyone with no login.

**Anyone can** read visible comments and post a new one.

**Nobody anonymous can** edit, delete, or unhide anything — those permissions
are enforced by database policies, not by the admin URL being hard to guess. A
stranger who opens `/#/blog-admin` sees only a login form.

**Commenter IP addresses** are stored so rate limiting can work, but are *not*
readable by the public. That's enforced with column-level `GRANT`s in the
schema, so even a hand-crafted API request can't retrieve them. Without those
grants, `select *` as an anonymous visitor would hand out every commenter's IP.

---

## What stops spam

| Layer | What it does |
| --- | --- |
| Honeypot field | An invisible input. Bots fill it, humans can't see it. Silently dropped |
| Submit timer | Anything submitted under 3 seconds after page load is dropped |
| Rate limit | Max 3 comments per IP per 5 minutes, enforced in a database trigger |
| Duplicate block | The same text on the same post within an hour is rejected |
| Length limits | Name ≤ 50 chars, comment ≤ 2000, enforced by database constraints |
| Hide, don't delete | Spam can be hidden from the public without losing the record |

This is real spam resistance, not a guarantee.

**If spam ever becomes a problem,** switch to approve-before-publish: in
`supabase/schema.sql`, change `new.is_hidden := false;` to
`new.is_hidden := true;` inside the insert trigger and re-run it. New comments
then stay invisible until you approve them in the admin page. The tradeoff is
that you become the bottleneck — nothing appears until you get to it.

---

## File map

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

---

## Notes on how it's built

**Routing** is hash-based (`#/blog/my-post`) with no router dependency. Deep
links work on any static host with no server rewrite rules.

**Posts are bundled at build time** via `import.meta.glob`. Adding a post means
adding a file — there's no index or config to update. Drafts are filtered out
before the bundle is written, so `draft: true` content never reaches the
browser.

**Post pages are code-split.** The markdown renderer and Supabase client only
load when someone opens a post, so they don't weigh down your landing page.

**Raw HTML in posts is allowed** (that's what makes video embeds work). This is
safe because you author the posts yourself and they live in your repo — but it
means don't paste HTML from an untrusted source into a post.
