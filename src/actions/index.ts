import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { parsePdf } from "@/files/pdf-parse";
import type { ConversionResponse } from "@/files/data-processing/conversion.ts";

export const server = {
  parsePdf: defineAction({
    input: z.object({
      url: z.string(),
    }),
    handler: async (input) => {
      const { url } = input;
      const { data, error }: ConversionResponse = await parsePdf({ url });
      if (error) console.error(error);
      if (!error) return data;
    },
  }),
};
