import { getContact } from "@/files/utils/get-items";
import { getLanguage } from "./utils/get-language";
import {
  ERROR_MESSAGE,
  type ConversionResponseData,
  type ConversionResponseError,
} from "./consts";

export async function linkedinConversion({ pdfParsed }: { pdfParsed: string }) {
  console.log(pdfParsed);
  const language = await getLanguage({ pdfParsed });
  let data: ConversionResponseData = {};
  let error: ConversionResponseError = ERROR_MESSAGE.NOT_IS_LINKEDIN;
  if (!language) return { data, error };
  const { contactItems } = await getContact({ pdfParsed, language });
  error = null;
  data = { contactItems };
  return { data, error };
}
