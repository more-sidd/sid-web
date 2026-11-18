import Nav      from './components/Nav';
import Index    from './components/Index';
import Academic from './components/Academic';
import Writing  from './components/Writing';
import Footer   from './components/Footer';
import { lazy, Suspense } from 'react';
import { useHashRoute } from './lib/useHashRoute';
import './index.css';
import './blog.css';

/* The markdown renderer, the Supabase client and the whole gallery are only
   needed once someone opens a post or the gallery, so they load on demand
   instead of weighing down the landing page. */
const BlogPost      = lazy(() => import('./components/BlogPost'));
const CommentsAdmin = lazy(() => import('./components/CommentsAdmin'));
const Gallery       = lazy(() => import('./components/Gallery'));
const Portfolio     = lazy(() => import('./components/Portfolio'));

function RouteFallback() {
  return (
    <div className="post-page">
      <div className="post-container">
        <p className="comments-status font-mono">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();

  return (
    <>
      <Nav />
      <main>
        {route.name === 'post' && (
          <Suspense fallback={<RouteFallback />}><BlogPost slug={route.slug} /></Suspense>
        )}
        {route.name === 'gallery' && (
          <Suspense fallback={<RouteFallback />}><Gallery /></Suspense>
        )}
        {route.name === 'portfolio' && (
          <Suspense fallback={<RouteFallback />}><Portfolio /></Suspense>
        )}
        {route.name === 'admin' && (
          <Suspense fallback={<RouteFallback />}><CommentsAdmin /></Suspense>
        )}
        {route.name === 'home' && (
          <>
            <Index />
            <Academic />
            <Writing />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
