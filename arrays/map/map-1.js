// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/* The map() method creates a new array populated with the results of calling a provided function
on every element in the calling array.

Syntax

let new_array = arr.map(function callback( currentValue[, index[, array]]) {
  // return element for new_array
}[, thisArg])

*/

const array1 = [1, 2, 3, 4, 5];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 4, 6, 8, 10]
