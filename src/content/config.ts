import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    category: z.string().default('Gaming'),
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    ctaLabel: z.string().default('Play Now'),
    featured: z.boolean().default(false),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaDescription: z.string().optional(),
    icon: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    ctaLabel: z.string().default('Play Now'),
  }),
});

export const collections = { blog, categories };
