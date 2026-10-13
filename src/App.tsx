import Nav      from './components/Nav';
import Index    from './components/Index';
import About    from './components/About';
import Academic from './components/Academic';
import Projects from './components/Projects';
import Toolbox  from './components/Toolbox';
import Writing  from './components/Writing';
import Contact  from './components/Contact';
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
        {route.name === 'admin' && (
          <Suspense fallback={<RouteFallback />}><CommentsAdmin /></Suspense>
        )}
        {route.name === 'home' && (
          <>
            <Index />
            <About />
            <Academic />
            <Projects />
            <Toolbox />
            <Writing />
            <Contact />
          </>
        )}
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Siddhi More · Boston, MA</span>
        <span>React · Vite · TypeScript</span>
      </footer>
    </>
  );
}
