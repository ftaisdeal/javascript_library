// Example using a function passed into forEach

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  0, 1, 2, 3, 4, 5, 6, 7, 8,
];

let grid = "<div>";

function formatGrid(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 9 === 0) {
      grid = `${grid}`;
    }
    if (i % 3 === 0) {
      grid = `${grid}<button class="group_col">${arr[i]}</button>`;
    } else {
      grid = `${grid}<button>${arr[i]}</button>`;
    }
    if (i % 9 === 8) {
      grid = `${grid}</div>\n<div>`;
    }
  }
  return grid;
}

formatGrid(arr);

console.log(grid);
