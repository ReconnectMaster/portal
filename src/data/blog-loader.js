import { postSlugs } from './blogData.js';

export async function loadAllPosts() {
  const results = await Promise.all(
    postSlugs.map(async (slug) => {
      try {
        const response = await fetch(`src/data/posts/${slug}.json`);
        if (!response.ok) throw new Error(`${slug}.json: HTTP ${response.status}`);
        return await response.json();
      } catch (error) {
        console.error('Could not load post:', slug, error);
        return null; // one broken post won't break the others
      }
    })
  );
  return results.filter(Boolean);
}

export async function getPostBySlug(slug) {
  const posts = await loadAllPosts();
  return posts.find((post) => post.slug === slug);
}
