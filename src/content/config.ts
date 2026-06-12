import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['unheard-tales', 'ajanya-kissa', 'sacred-history', 'dharmic-itihas']),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    readTime: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
