/*
A callback is a function entered as an input to a function.
The callback can then be used within the outer function.
*/

function test(callback) {
  result = callback(2);
}

function callback(int) {
  return int;
}

test(callback);

console.log(result);