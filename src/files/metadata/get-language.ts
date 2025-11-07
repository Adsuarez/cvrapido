import { LanguageOfPdf } from "@/files/metadata/language-of-pdf.ts";

export async function getLanguage({ pdfParsed }: { pdfParsed: string }) {
  const language = new LanguageOfPdf({ pdfParsed });
  return language.is;
}
