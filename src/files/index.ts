import { PdfReader } from "pdfreader";

type Row = {
  [y: string]: string[];
};
let rows: Row = {}; // indexed by y-position
let sortedRows: string[] = [];

function printRows() {
  Object.keys(rows) // => array of y-positions (type: float)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
    .forEach((y) => {
      sortedRows.push((rows[y] || []).join(""));
    });
}

export async function readLinealPdf() {
  new PdfReader().parseFileItems("./example.pdf", function (err, item) {
    if (!item || item.page) {
      // end of file, or page
      printRows();
      //console.log("PAGE:", item?.page);
      rows = {}; // clear rows for next page
    } else if (item.text) {
      // accumulate text items into rows object, per line
      (rows[item.y] = rows[item.y] || []).push(item.text);
    }
  });
  return sortedRows;
}
