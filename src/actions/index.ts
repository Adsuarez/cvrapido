import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { readPDF } from "../files";

let result: string[] = [];
export const server = {
  getConversion: defineAction({
    handler: async () => {
      await readPDF().then((res) => {
        result = res;
      });

      return result;
    },
  }),
};
