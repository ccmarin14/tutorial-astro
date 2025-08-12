import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

interface RSSOptions {
  site: string | URL;
}

export async function GET(context:RSSOptions) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Cristian Marin | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>es-es</language>`,
  });
}