import { Contact, Skill } from "@/files/classes";
import { Languages } from "@/files/consts";

export async function getContact({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  const contact = new Contact({ language });
  const skill = new Skill({ language });
  console.log("\n\n----------", contact.text, "-----------\n\n");
  const contactIndex = pdfParsed.search(contact.regexp);
  const skillIndex = pdfParsed.search(skill.regexp);

  if (contactIndex >= 0) {
    console.log({ contactIndex, skillIndex });
  }
}
