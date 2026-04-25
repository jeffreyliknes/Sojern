import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const rooms = defineCollection({
  loader: file("./src/data/rooms.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    name_en: z.string().optional(),
    category: z.string(),
    type: z.string().optional(),
    size_sqm: z.union([z.string(), z.number()]).optional(),
    max_guests: z.number().optional(),
    description_de: z.string().optional(),
    description_en: z.string().optional(),
    amenities: z.array(z.string()).optional(),
    slug: z.string(),
    tour_360_url: z.string().optional(),
    variants: z
      .array(
        z.object({
          name: z.string(),
          size_sqm: z.number(),
          max_guests: z.number(),
          bedrooms: z.number().optional(),
          description_de: z.string(),
          tour_360_url: z.string().optional(),
        }),
      )
      .optional(),
  }).passthrough(),
});

const packages = defineCollection({
  loader: file("./src/data/packages.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    name_en: z.string().optional(),
    slug: z.string(),
    min_nights: z.number().optional(),
    seasonal: z.boolean().optional(),
    season: z.string().optional(),
    description_de: z.string(),
    includes: z.array(z.string()),
    cancellation: z.string().optional(),
  }),
});

const eventSpaces = defineCollection({
  loader: file("./src/data/event-spaces.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    location: z.string(),
    capacity_persons: z.number(),
    use_cases: z.array(z.string()),
    description_de: z.string(),
    tour_360_url: z.string().optional(),
    catering: z.boolean().optional(),
    overnight_guests: z.boolean().optional(),
    tech_equipment: z.array(z.string()).optional(),
    special_features: z.array(z.string()).optional(),
  }).passthrough(),
});

export const collections = {
  rooms,
  packages,
  eventSpaces,
};
