import { PDFParse } from "pdf-parse";
import { linkedinConversion } from "@/files/linkedin-conversion";
import type { ConversionResponse } from "./consts";

export async function parsePdf({ url }: { url: string }) {
  const parser = new PDFParse({ url });
  const pdfParsed = await parser.getText();
  const { data, error }: ConversionResponse = await linkedinConversion({
    pdfParsed: pdfParsed.text,
  });
  return { data, error };
}
