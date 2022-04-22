/*
The rest parameter syntax allows a function to accept an indefinite number of arguments 
as an array, providing a way to represent variadic functions in JavaScript.
*/

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10