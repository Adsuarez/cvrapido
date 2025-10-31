import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { parsePdf } from "@/files/pdf-parse";
import { Languages } from "@/files/consts";

export const server = {
  parsePdf: defineAction({
    input: z.object({
      url: z.string(),
      language: z.nativeEnum(Languages),
    }),
    handler: async (input) => {
      return await parsePdf({ url: input.url, language: input.language });
    },
  }),
};
