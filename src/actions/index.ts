import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { parsePdf } from "@/files/pdf-parse";
import type { ConversionResponse } from "@/files/consts";

export const server = {
  parsePdf: defineAction({
    input: z.object({
      url: z.string(),
    }),
    handler: async (input) => {
      const { url } = input;
      const { data, error }: ConversionResponse = await parsePdf({ url });
      console.error(error);
      if (!error) return data;
    },
  }),
};
