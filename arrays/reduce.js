// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/*
The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.

Note: this method does not change the original array.
*/

// EXAMPLE 1
function myFunc(total, num) {
  return total - num;
}

var numbers = [175, 50, 25];

console.log(`Reduce result: ${numbers.reduce(myFunc)}`);
// 175 - 50 - 25
// Expected output: 100


// EXAMPLE 2
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
// 1 + 2 + 3 + 4
// Expected output: 10


// EXAMPLE 3
console.log(array1.reduce(reducer, 5));
// 5 + 1 + 2 + 3 + 4
// Expected output: 15

