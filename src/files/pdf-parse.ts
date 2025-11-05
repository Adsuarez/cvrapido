import { PDFParse } from "pdf-parse";
import { linkedinConversion } from "@/files/linkedin-conversion.ts";
import type { ConversionResponse } from "@/files/consts.ts";

export async function parsePdf({ url }: { url: string }) {
  const parser = new PDFParse({ url });
  const pdfParsed = await parser.getText();
  const finalResponse: ConversionResponse = await linkedinConversion({
    pdfParsed: pdfParsed.text,
  });
  return finalResponse;
}
