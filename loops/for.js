// Example 1: Do something a certaain number of times
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Example 2: Iterate through an arraay
const array = [1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Example 3: Build up some HTML
let html = "<ol>\n";

for (var i = 0; i < 9; i++) {
  html += `<li>item ${i}</li>\n`;
}

html += "</ol>";

console.log(html);