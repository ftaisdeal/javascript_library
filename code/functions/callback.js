/*
A callback is a function entered as an input to a function.
The callback can then be used within the outer function.
*/

function test(callback) {
  result = callback(2);
}

function square(int) {
  return int ** 2; // exponentiation operator to square the number
}

test(square);

console.log(result);