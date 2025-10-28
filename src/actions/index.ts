import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  getConversion: defineAction({
    handler: async () => {
      return "hola";
    },
  }),
};
