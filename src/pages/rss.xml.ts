import rss, { pagesGlobToRssItems } from '@astrojs/rss';

interface RSSOptions {
  site: string | URL;
}

export async function GET(context:RSSOptions) {
  return rss({
    title: 'Cristian Marin | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-es</language>`,
  });
}