import { PDFParse } from "pdf-parse";
import { linkedinConversion } from "@/files/linkedin-conversion";
import { Languages } from "@/files/consts";

export async function parsePdf({
  url,
  language,
}: {
  url: string;
  language: Languages;
}) {
  const parser = new PDFParse({ url });
  const pdfParsed = await parser.getText();
  const result = await linkedinConversion({
    pdfParsed: pdfParsed.text,
    language,
  });
  return result;
}
