import { Language } from "@/files/classes.ts";

export async function getLanguage({ pdfParsed }: { pdfParsed: string }) {
  const language = new Language({ pdfParsed });
  return language.is;
}
