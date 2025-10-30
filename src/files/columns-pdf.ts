import { PdfReader, TableParser, type Item } from "pdfreader";

const nbCols = [0, 1];
const cellPadding = 60; // each cell is padded to fit 40 characters
const columnQuantitizer = (item: Item) => {
  const columns = typeof item.x == "string" ? parseFloat(item.x) : item.x;
  return columns;
};

const padColumns = (array: Item[][], nb: number[]) =>
  Array.apply(null, nb).map((val, i) => array[i] || []);

// .. because map() skips undefined elements

const mergeCells = (cells) =>
  (cells || [])
    .map((cell) => cell.text)
    .join("") // merge cells
    .substr(0, cellPadding)
    .padEnd(cellPadding, " "); // padding

const renderMatrix = (matrix: Item[][][]) =>
  (matrix || [])
    .map((row, y) => padColumns(row, nbCols).map(mergeCells).join(" | "))
    .join("\n");

let table = new TableParser();

export async function readColumnsPdf({ columns = 2 }) {
  new PdfReader().parseFileItems("./example.pdf", function (err, item) {
    if (!item || item.page) {
      // end of file, or page
      console.log(renderMatrix(table.getMatrix()));
      console.log("PAGE:", item?.page);
      table = new TableParser(); // new/clear table for next page
    } else if (item.text) {
      // accumulate text items into rows object, per line
      table.processItem(item, columnQuantitizer(item));
    }
  });
}
