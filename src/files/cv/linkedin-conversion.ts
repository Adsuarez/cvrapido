import { getItems } from "@/files/cv/get-items.ts";
import { getLanguage } from "@/files/metadata/get-language.ts";
import {
  type ConversionResponseData,
  type ConversionResponseError,
  type ConversionResponse,
} from "@/files/data-processing/conversion.ts";
import { ERROR_MESSAGE } from "@/files/data-processing/errors.ts";

export async function linkedinConversion({ pdfParsed }: { pdfParsed: string }) {
  console.log(pdfParsed);
  const language = await getLanguage({ pdfParsed });
  const data: ConversionResponseData = null;
  const error: ConversionResponseError = ERROR_MESSAGE.NOT_IS_LINKEDIN;
  let response: ConversionResponse = { data, error };
  if (!language) return response;
  response = await getItems({
    pdfParsed,
    language,
  });
  return response;
}
