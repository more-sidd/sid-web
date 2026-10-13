import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'post'; slug: string }
  | { name: 'gallery' }
  | { name: 'admin' };

/**
 * Hash routing keeps deep links working on any static host (GitHub Pages,
 * Netlify, Vercel) with no server rewrite rules and no router dependency.
 *   #/blog/my-post  →  { name: 'post', slug: 'my-post' }
 *   #/gallery       →  { name: 'gallery' }
 *   #/blog-admin    →  { name: 'admin' }
 *   anything else   →  { name: 'home' }
 *
 * The gallery is its own route rather than a section on the home page,
 * because the site map reaches it from a button in every section header —
 * scrolling back to an inline section from five different places would mean
 * five different scroll targets and no way to link to it.
 */
function parse(hash: string): Route {
  const path = hash.replace(/^#/, '');
  const postMatch = path.match(/^\/blog\/([A-Za-z0-9._-]+)\/?$/);
  if (postMatch) return { name: 'post', slug: postMatch[1] };
  if (/^\/gallery\/?$/.test(path)) return { name: 'gallery' };
  if (/^\/blog-admin\/?$/.test(path)) return { name: 'admin' };
  return { name: 'home' };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function navigate(path: string) {
  window.location.hash = path;
  window.scrollTo({ top: 0 });
}

export function goHome(sectionId?: string) {
  window.location.hash = '';
  if (sectionId) {
    // Wait for the home tree to mount before scrolling to the section.
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 60);
  } else {
    window.scrollTo({ top: 0 });
  }
}
