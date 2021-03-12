// Example using a function passed into forEach

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

let grid = "<div>";

function formatGrid(e) {
  grid = grid + `<button>${e}</button>`;
  if (e % 9 === 0) {
    grid = `${grid}</div>\n`;
  }
  if (e % 3 == 0) {
    grid = grid + `<button className="group">${e}</button>`;
  } else {
    grid = grid + `<button>${e}</button>`;
  }
}

arr.forEach(formatGrid);

grid = grid + "</div>";

console.log(grid);
