// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

/* 
Spread syntax (...) allows an iterable such as an array expression or string to be expanded
in places where zero or more arguments (for function calls) or elements (for array literals)
are expected, or an object expression to be expanded in places where zero or more key-value pairs
(for object literals) are expected.
*/

// Add elements froom one array into a new array on the fly.
const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2);

// Add the elements of two different arrays into a new array.
const arr3 = [4, 5, 6];
const arr4 = [7, 8, 9];
const arr5 = [1, 2, 3, ...arr3, ...arr4];
console.log(arr5);


// Send the elements of an array into a function
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
