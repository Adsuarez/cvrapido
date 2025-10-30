import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { readLinealPdf } from "../files/lineal-pdf";
import { readColumnsPdf } from "../files/columns-pdf";

let result: string[] = [];
export const server = {
  getLinealPdfConversion: defineAction({
    handler: async () => {
      await readLinealPdf().then((res) => {
        result = res;
      });

      return result;
    },
  }),
  getColumnsPdfConversion: defineAction({
    handler: async () => {
      let result = await readColumnsPdf({ columns: 2 });
      return result;
    },
  }),
};
