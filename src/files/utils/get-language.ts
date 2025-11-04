import { LanguageOfPdf } from "@/files/classes.ts";

export async function getLanguage({ pdfParsed }: { pdfParsed: string }) {
  const language = new LanguageOfPdf({ pdfParsed });
  return language.is;
}
