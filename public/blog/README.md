# Blog images and video

Put photos and video for your blog posts in this folder.

Reference them from a post with a `/blog/` path:

```markdown
![Caption describing the photo](/blog/gearbox.jpg)
```

```html
<video controls preload="metadata">
  <source src="/blog/test-run.mp4" type="video/mp4" />
</video>
```

## Name files lowercase with hyphens

`gearbox-v2.jpg` — good
`Gearbox V2.JPG` — will break

Capital letters and spaces in filenames broke every image on this site once
already. Windows ignores capitalisation, but the server your site runs on does
not, so a file that works on your laptop can 404 in production.

See [BLOG.md](../../BLOG.md) for the full writing guide.
