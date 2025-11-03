import { getContact } from "@/files/utils/get-contact";
import { getLanguage } from "./utils/get-language";

export async function linkedinConversion({ pdfParsed }: { pdfParsed: string }) {
  console.log(pdfParsed);
  const language = await getLanguage({ pdfParsed });
  if (language) {
    await getContact({ pdfParsed, language });
  }
}
