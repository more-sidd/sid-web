import { posts, allTags } from '../lib/posts';
import PostGrid from './PostGrid';

export default function Blog() {
  return (
    <PostGrid
      id="blog"
      label="07 — Writing"
      heading="Blog & Notes"
      items={posts}
      tags={allTags}
      emptyFolder="src/content/blog/"
    />
  );
}
