// In JavaScript, strings are immutable.

/* Adding an empty string to something is a useful way of converting it to a string itself,
but the order matters. */

let a = 1;
let b = 2;
let c = a + b + '';

console.log(c); // result is a number
console.log(isNaN(c));

let e = '' + a + b;
console.log(e); // result is a operated on as a string but then converted to a number
console.log(isNaN(e));

/* Strings are not arrays, but in some cases can be treated like arrays.
For instance, the push, pop, shift and unshift methods for arrays do not work on strings in JavaScript.
*/

let string = "12345";

string.push("6"); // Throws an error

console.log(string);

string.pop(); // Throws an error

console.log(string);