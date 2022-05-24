/* Every string has a length property that can be used in various ways,
including iterating over the string.
*/

const string = "This is a string.";

const length = string.length;

console.log(length);

// Iterate over a string
for (i = 0; i < string.length; i++) {

  console.log(string[i]);

}