# Fonts

The site expects **one file** in this folder:

```
public/fonts/Delight-Variable.woff2
```

Until it's here, the site renders in system fonts. It stays readable — it just
isn't Delight yet.

---

## Getting it

1. Download Delight from the designer, Rajesh Rajput:
   **https://rajputrajesh-448.gumroad.com/l/Delight9**
   It's free (pay-what-you-want — you can enter 0).

2. Unzip it and find the **variable** `.woff2` file. It'll be named something
   like `Delight-VF.woff2`, `DelightVariable.woff2`, or `Delight[wght].woff2` —
   the exact name varies.

3. Rename it to `Delight-Variable.woff2` and drop it in this folder.

That's it. One file covers all 9 weights.

**Don't** download Delight from dafontfree, befonts, freefonts.io, or similar
aggregators. They redistribute it without permission, and re-wrapped font files
are a common malware vector. Get it from the designer.

**Read the license file in the download** before you deploy. Delight is
described as free for personal and commercial use, but confirm that yourself —
and confirm that webfont embedding is covered, since that's sometimes licensed
separately even for free fonts.

---

## If the download has no variable file

If you only got static weights (one file per weight), replace the `@font-face`
block in `src/index.css` with one block per weight you actually use. The site
uses **400** for body text and **700** for headings, so two is enough:

```css
@font-face {
  font-family: 'Delight';
  src: url('/fonts/Delight-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Delight';
  src: url('/fonts/Delight-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

If the download only has `.ttf` or `.otf`, convert to `.woff2` first at
[cloudconvert.com](https://cloudconvert.com/ttf-to-woff2) or
[transfonter.org](https://transfonter.org). A `.ttf` is roughly 3–5× larger over
the wire than the equivalent `.woff2`, which is a real cost on mobile.

---

## Tuning after it's installed

Delight's lowercase is much wider than Bebas Neue's condensed caps, so heading
sizes were reduced and tracking tightened to compensate. Those numbers are
estimates made without the font in hand — expect to nudge them once you can see
it. The ones most likely to need adjusting:

| What | Where |
| --- | --- |
| Hero name size | `src/components/Hero.tsx` — the `fontSize` clamp on the `<h1>` |
| Section headings | `src/index.css` — `.heading` and `.section-heading` |
| Blog post titles | `src/blog.css` — `.post-title` |
| Global heading weight/tracking | `src/index.css` — `.font-display` |

If headings look too light, raise `font-weight` from 700 toward 800 or 900.
Delight has all nine.
