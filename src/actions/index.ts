import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { parsePdf } from "@/files/pdf-parse";

export const server = {
  parsePdf: defineAction({
    handler: async () => {
      return await parsePdf();
    },
  }),
};
