import { PDFParse } from "pdf-parse";
import { linkedinConversion } from "@/files/linkedin-conversion";
import { Languages } from "@/files/consts";

export async function parsePdf() {
  const parser = new PDFParse({ url: "./example3.pdf" });
  const pdfParsed = await parser.getText();
  const result = await linkedinConversion({
    pdfParsed: pdfParsed.text,
    language: Languages.Spanish,
  });
  return result;
}
