import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    eventDate: z.coerce.date().optional(),
    location: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const galleries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    eventDate: z.coerce.date().optional(),
    location: z.string().optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional()
        })
      )
      .default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { articles, galleries };
