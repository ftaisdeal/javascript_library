/* Strings are not arrays, but in some cases can be treated like arrays.
In JavaScript, strings are immutable. For instance, the push, pop, shift and unshift methods for
arrays do not work on strings in JavaScript.
*/

let string = "12345";

string.push("6"); // Throws an error

console.log(string);

string.pop(); // Throws an error

console.log(string);
