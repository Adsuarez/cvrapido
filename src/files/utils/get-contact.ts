import { Contact } from "@/files/classes";
import { Languages } from "@/files/consts";

export async function getContact({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  const contact = new Contact({ language });
  console.log("\n\n----------", contact.text, "-----------\n\n");
  const contactIndex = pdfParsed.search(contact.regexp);
  if (contactIndex >= 0) {
    console.log({ contactIndex });
  }
}
