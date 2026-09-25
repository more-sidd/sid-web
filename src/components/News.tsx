import { news, newsTags } from '../lib/posts';
import PostGrid from './PostGrid';

export default function News() {
  return (
    <PostGrid
      id="news"
      label="08 — News"
      heading="News"
      items={news}
      tags={newsTags}
      emptyFolder="src/content/news/"
      emptyIcon="📣"
    />
  );
}
