import { PDFParse } from "pdf-parse";
import { linkedinConversion } from "./linkedin-conversion";
import { Languages } from "./consts";

export async function parsePdf() {
  const parser = new PDFParse({ url: "./example2.pdf" });
  const pdfParsed = await parser.getText();
  const result = await linkedinConversion({
    pdfParsed: pdfParsed.text,
    language: Languages.English,
  });
  return result;
}
