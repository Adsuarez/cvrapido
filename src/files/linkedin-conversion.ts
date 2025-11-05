import { getItems } from "@/files/utils/get-items.ts";
import { getLanguage } from "@/files/utils/get-language.ts";
import {
  ERROR_MESSAGE,
  type ConversionResponseData,
  type ConversionResponseError,
  type ConversionResponse,
} from "@/files/consts.ts";

export async function linkedinConversion({ pdfParsed }: { pdfParsed: string }) {
  console.log(pdfParsed);
  const language = await getLanguage({ pdfParsed });
  let data: ConversionResponseData = null;
  let error: ConversionResponseError = ERROR_MESSAGE.NOT_IS_LINKEDIN;
  let response: ConversionResponse = { data, error };
  if (!language) return response;
  const { contactItems, topSkills, personalInformation, summary } =
    await getItems({
      pdfParsed,
      language,
    });
  error = null;
  data = { contactItems, topSkills, personalInformation, summary };
  response = { data, error };
  return response;
}
