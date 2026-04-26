import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  const base = '/kiefer-website';

  return rss({
    title: 'Kiefer.dev Blog',
    description: 'Thoughts on software testing, cybersecurity, AI/LLM security, music, and tech.',
    site: context.site || 'https://kiefertaylorland.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${base}/blog/${post.slug}/`,
    })),
  });
}
