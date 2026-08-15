-- ============================================================================
--  Blog comments — run this once in the Supabase SQL Editor.
--
--  Security model:
--    · Anyone (anon) may READ visible comments and INSERT a new one.
--    · Nobody anonymous can edit, delete, or unhide anything.
--    · Only YOUR signed-in account can see hidden comments, hide, or delete.
--    · Commenter IPs are stored for rate limiting but are NOT readable by the
--      public — enforced with column-level GRANTs, not just RLS.
--
--  Before running: change OWNER_EMAIL below if this is not your account.
-- ============================================================================

create extension if not exists pgcrypto;

-- ── Table ───────────────────────────────────────────────────────────────────
create table if not exists public.comments (
  id          uuid primary key default gen_random_uuid(),
  post_slug   text        not null,
  author_name text        not null,
  body        text        not null,
  created_at  timestamptz not null default now(),
  is_hidden   boolean     not null default false,
  author_ip   text,

  constraint comments_slug_format check (post_slug ~ '^[A-Za-z0-9._-]+$'),
  constraint comments_name_len    check (char_length(btrim(author_name)) between 1 and 50),
  constraint comments_body_len    check (char_length(btrim(body)) between 1 and 2000)
);

create index if not exists comments_post_idx on public.comments (post_slug, created_at desc);
create index if not exists comments_ip_idx   on public.comments (author_ip, created_at desc);

-- ── Who is allowed to moderate ──────────────────────────────────────────────
-- Change this to your Supabase Auth account email.
create or replace function public.is_blog_owner()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'more.sidd@northeastern.edu';
$$;

-- ── Insert guard: stamps IP, forces defaults, rate limits, blocks dupes ─────
create or replace function public.comments_before_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  ip     text;
  recent integer;
  dupes  integer;
begin
  -- x-forwarded-for is a comma-separated chain; the client IP is the first hop.
  ip := btrim(split_part(
    coalesce(current_setting('request.headers', true)::json ->> 'x-forwarded-for', ''),
    ',', 1
  ));

  new.author_ip  := nullif(ip, '');
  new.created_at := now();
  new.is_hidden  := false;   -- a commenter can never choose their own visibility
  new.id         := gen_random_uuid();

  if new.author_ip is not null then
    select count(*) into recent
      from public.comments c
     where c.author_ip = new.author_ip
       and c.created_at > now() - interval '5 minutes';

    if recent >= 3 then
      raise exception 'Too many comments — please wait a few minutes before posting again.'
        using errcode = 'P0001';
    end if;
  end if;

  -- Same text on the same post within an hour is almost always a bot or a
  -- double-click, never a person with something new to say.
  select count(*) into dupes
    from public.comments c
   where c.post_slug = new.post_slug
     and btrim(c.body) = btrim(new.body)
     and c.created_at > now() - interval '1 hour';

  if dupes > 0 then
    raise exception 'That comment was already posted.'
      using errcode = 'P0001';
  end if;

  return new;
end;
$$;

drop trigger if exists comments_before_insert_trg on public.comments;
create trigger comments_before_insert_trg
  before insert on public.comments
  for each row execute function public.comments_before_insert();

-- ── Row Level Security ──────────────────────────────────────────────────────
alter table public.comments enable row level security;

drop policy if exists "public reads visible comments" on public.comments;
create policy "public reads visible comments"
  on public.comments for select to anon
  using (is_hidden = false);

drop policy if exists "anyone may post a comment" on public.comments;
create policy "anyone may post a comment"
  on public.comments for insert to anon
  with check (
    char_length(btrim(author_name)) between 1 and 50
    and char_length(btrim(body))    between 1 and 2000
  );

drop policy if exists "owner reads everything" on public.comments;
create policy "owner reads everything"
  on public.comments for select to authenticated
  using (public.is_blog_owner());

drop policy if exists "owner may hide" on public.comments;
create policy "owner may hide"
  on public.comments for update to authenticated
  using (public.is_blog_owner()) with check (public.is_blog_owner());

drop policy if exists "owner may delete" on public.comments;
create policy "owner may delete"
  on public.comments for delete to authenticated
  using (public.is_blog_owner());

-- ── Column-level grants ─────────────────────────────────────────────────────
-- RLS filters rows; these filter COLUMNS. Without them, `select *` as an
-- anonymous visitor would hand out every commenter's IP address.
revoke all on public.comments from anon, authenticated;

grant select (id, post_slug, author_name, body, created_at, is_hidden)
  on public.comments to anon;
grant insert (post_slug, author_name, body)
  on public.comments to anon;

grant select, update, delete on public.comments to authenticated;
