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

export const collections = {
  cases,
};
