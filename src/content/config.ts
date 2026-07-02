import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    outlet: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['it', 'en', 'fr', 'de', 'es', 'other']).default('it'),
    summary: z.string(),
    summaryEn: z.string().optional(),
    url: z.string().url(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const speeches = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    event: z.string(),
    eventEn: z.string().optional(),
    location: z.string().optional(),
    date: z.coerce.date(),
    lang: z.enum(['it', 'en', 'fr', 'de', 'es', 'other']).default('it'),
    type: z.enum(['youtube', 'hosted']),
    youtubeId: z.string().optional(),
    videoSrc: z.string().optional(),  // path under /public for hosted videos
    audioSrc: z.string().optional(),
    transcript: z.string().optional(),
    summary: z.string(),
    summaryEn: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, speeches };
