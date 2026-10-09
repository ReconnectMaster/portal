// Bridge file: reads the list in blogData.js, then fetches each post's JSON file.
// Used by both blog.html (list of cards) and blog-post.html (single post).
//
// NOTE: the fetch path is relative to the HTML PAGE (blog.html / blog-post.html),
// which sits in the website root, so the path starts with src/data/posts/

import { postSlugs } from './blogData.js';

export async function loadAllPosts() {
  const results = await Promise.all(
    postSlugs.map(async (slug) => {
      try {
        const response = await fetch(`src/data/posts/${slug}.json`);
        if (!response.ok) {
          throw new Error(`${slug}.json: HTTP ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        // One broken or missing post will not break the others
        console.error('Could not load post:', slug, error);
        return null;
      }
    })
  );
  return results.filter(Boolean);
}

export async function getPostBySlug(slug) {
  const posts = await loadAllPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getAllPostSlugs() {
  const posts = await loadAllPosts();
  return posts.map((post) => post.slug);
}
