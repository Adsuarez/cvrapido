import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { readLinealPdf } from "../files";

let result: string[] = [];
export const server = {
  getConversion: defineAction({
    handler: async () => {
      await readLinealPdf().then((res) => {
        result = res;
      });

      return result;
    },
  }),
};
