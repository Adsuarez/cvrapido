import { PDFParse } from "pdf-parse";
import { linkedinConversion } from "@/files/linkedin-conversion";

export async function parsePdf({ url }: { url: string }) {
  const parser = new PDFParse({ url });
  const pdfParsed = await parser.getText();
  const result = await linkedinConversion({
    pdfParsed: pdfParsed.text,
  });
  return result;
}
