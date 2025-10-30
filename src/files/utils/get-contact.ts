import { Contacts } from "../classes";
import { Languages } from "../consts";

export async function getContact({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  const contact = new Contacts({ language });
  console.log("\n\n----------", contact.text, "-----------\n\n");
  const contactIndex = pdfParsed.search(contact.regexp);
  if (contactIndex >= 0) {
    console.log({ contactIndex });
  }
}
