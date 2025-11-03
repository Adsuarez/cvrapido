import { getContact } from "@/files/utils/get-contact";
import { getLanguage } from "./utils/get-language";
import type {
  ConversionResponse,
  ConversionResponseData,
  ConversionResponseError,
} from "./consts";

export async function linkedinConversion({ pdfParsed }: { pdfParsed: string }) {
  console.log(pdfParsed);
  const language = await getLanguage({ pdfParsed });
  let data: ConversionResponseData = {};
  let error: ConversionResponseError =
    "The document provided is not compatible with a LinkedIn resume PDF";
  if (!language) return { data, error };
  const { contactItems } = await getContact({ pdfParsed, language });
  error = null;
  data = { contactItems };
  return { data, error };
}
