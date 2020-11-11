// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

/* The slice() method returns a shallow copy of a portion of an array into a new array object
   selected from start to end (end not included) where start and end represent the index of
   items in that array. The original array will not be modified. */

const animals = [0, 1, 2, 3, 4, 5];

console.log(animals.slice(1));
// Expected output: [ 1, 2, 3, 4, 5 ]

console.log(animals.slice(2, 4));
// Expected output: [ 2, 3 ]

console.log(animals.slice(0, 4));
// Expected output: [ 0, 1, 2, 3 ]

const new_array = animals.slice(1, 5);
console.log(new_array);
// Expected output: [ 1, 2, 3, 4 ]