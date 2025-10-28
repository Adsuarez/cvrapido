import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { pdfReader } from "../files";

export const server = {
  getConversion: defineAction({
    handler: async () => {
      pdfReader();
      return "hola";
    },
  }),
};
