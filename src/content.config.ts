import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const cases = defineCollection({
  loader: file("src/data/cases.yml"),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3).max(80),
      description: z.string().min(5),
      thumbUrl: image(),
      tags: z.array(z.string()),
      link: z.string().optional(),
      hint: z.string().max(50).optional(),
    }),
});

const mates = defineCollection({
  loader: file("src/data/team.yml"),
  schema: ({ image }) =>
    z.object({
      fullname: z.string().min(2).max(30),
      position: z.string().min(2).max(30),
      image: image(),
      extra: z.object({
        info: z.string().min(2).max(100),
        exp: z.string().max(100).optional(),
      }),
    }),
});

const services = defineCollection({
  loader: file("src/data/services.yml"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: image(),
      variation: z.array(
        z.object({
          v: z.string(),
          price: z.string().optional(),
          duration: z.string().optional(),
        })
      ),
    }),
});

export const collections = { cases, mates, services };
