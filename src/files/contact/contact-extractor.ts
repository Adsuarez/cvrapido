import type { ContactWord } from "@/files/contact/contact-word.ts";
import { MOBILE_WORD } from "@/files/words/consts.ts";
import type { Languages } from "@/files/metadata/language-of-pdf.ts";
import type { ContactItems } from "@/files/contact/contact.ts";
import { EMAIL_REGEXP } from "@/files/contact/email.ts";

export function contactExtractor({
  pdfParsed,
  language,
  contactWord,
  skillIndex,
}: {
  pdfParsed: string;
  language: Languages;
  contactWord: ContactWord;
  skillIndex: number;
}) {
  const contactIndex = pdfParsed.search(contactWord.regexp);
  const allContact = pdfParsed.slice(contactIndex, skillIndex);

  const mobileIndex = pdfParsed.search(MOBILE_WORD[language]);
  const mobile =
    mobileIndex >= 0
      ? allContact
          .slice(contactIndex + contactWord.length, mobileIndex)
          .replace("(", "")
          .trim()
      : "";

  const emailIndex = allContact.search(EMAIL_REGEXP);
  const linkedinUrlIndex = allContact.search("www.linkedin");
  const email = allContact
    .slice(emailIndex, linkedinUrlIndex)
    .replaceAll("\n", "");

  const contactItems: ContactItems = { email, mobile };
  return contactItems;
}
