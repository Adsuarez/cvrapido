import { getItems } from "@/files/utils/get-items.ts";
import { getLanguage } from "@/files/utils/get-language.ts";
import {
  ERROR_MESSAGE,
  type ConversionResponseData,
  type ConversionResponseError,
} from "@/files/consts.ts";

export async function linkedinConversion({ pdfParsed }: { pdfParsed: string }) {
  console.log(pdfParsed);
  const language = await getLanguage({ pdfParsed });
  let data: ConversionResponseData = {};
  let error: ConversionResponseError = ERROR_MESSAGE.NOT_IS_LINKEDIN;
  if (!language) return { data, error };
  const { contactItems, topSkills, personalInformation } = await getItems({
    pdfParsed,
    language,
  });
  error = null;
  data = { contactItems, topSkills, personalInformation };
  return { data, error };
}
