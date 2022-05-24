/* The unshift method adds an element to the beginning of an array and
returns the new length of the array */

let array = [1, 2, 3, 4, 5];

array.unshift(0);
// Add one element to the beginning of the array

array.unshift(-2, -1);
// Add two elements to the beginning of the array

let element = array.unshift(-3);
/* Add an element to the beginning of the array, and define a variable that is
the new length of the array */

console.log(element);
console.log(array);
