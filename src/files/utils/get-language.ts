import { Language } from "../classes";

export async function getLanguage({ pdfParsed }: { pdfParsed: string }) {
  const language = new Language({ pdfParsed });
  return language.is;
}
