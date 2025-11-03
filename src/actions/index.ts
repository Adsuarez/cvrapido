import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { parsePdf } from "@/files/pdf-parse";

export const server = {
  parsePdf: defineAction({
    input: z.object({
      url: z.string(),
    }),
    handler: async (input) => {
      const { url } = input;
      return await parsePdf({ url });
    },
  }),
};
