export interface Frontmatter {
  title: string;
  pubDate: Date;
  author?: string;
  description: string;
  image: {url: string, alt: string};
  tags: string[];
}