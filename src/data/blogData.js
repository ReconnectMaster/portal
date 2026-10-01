// 1. Plug in each individual light bulb (JSON post)
// Import all blog posts
import post1 from './posts/gmail-delete-rename.json';
import post2 from './posts/json-vs-javascript-differences.json';
import post3 from './posts/html-css-javascript-house-building.json';
import post4 from './posts/ai-era-automation-to-ai-agents.json';

// 2. Control which lights are turned ON across the whole site
// Export all posts to make them available across the site
export const blogPosts = [
  post1,
  post2,
  post3,
  post4
];
