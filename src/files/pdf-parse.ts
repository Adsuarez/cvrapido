import { PDFParse } from "pdf-parse";

export async function parsePdf() {
  const parser = new PDFParse({ url: "./example2.pdf" });

  const result = await parser.getText();
  return result.text;
}
