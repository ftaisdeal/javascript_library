// Example using a function passed into forEach

const arr = [
  1, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, 7, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, null, null, 3, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, null, 9, null, null, null, null, null,
  null, null, null, null, null, null, 4, null, null,
  null, null, null, null, null, null, null, null, null

];

let grid = "<div>";

function formatGrid(arr) {
  let entry;
  let disabled;
  let group_row = "";
  for (let i = 0; i < arr.length; i++) {
    if ((i % 27 === 0) && (i != 0)) {
      group_row = " group_row";
    } else if (i % 27 === 9) {
      group_row = "";
    }
    if (arr[i] != null) {
      entry = arr[i];
      disabled = " disabled";
    } else {
      entry = "0";
      disabled = "";
    }
    if (i % 9 === 0) {
      grid = `${grid}`;
    }
    if ((i % 9 === 2) || (i % 9 === 5)) {
      grid = `${grid}<button class="square group_col${group_row}${disabled}"${disabled}>${entry}</button>`;
    } else {
      grid = `${grid}<button class="square${group_row}${disabled}"${disabled}>${entry}</button>`;
    }
    if ((i % 9 === 8) && (i === arr.length - 1)) {
      grid = `${grid}</div>`;
    } else if (i % 9 === 8) {
      grid = `${grid}</div>\n<div>`;
    }
  }
  return grid;
}

formatGrid(arr);

console.log(grid);
