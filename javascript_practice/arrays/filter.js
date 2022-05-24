// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// Filter for the words with a length greater than 6.
const words_filtered = words.filter((word) => word.length > 6);

console.log(words_filtered);
// Expected output: Array ["exuberant", "destruction", "present"]

// Filter for numbers greaater than 4.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers_filtered = numbers.filter((number) => number > 4);

console.log(numbers_filtered);

// Filter for even numbers and add them together
function even_add(...nums) {
  let sum = 0;
  nums.filter((n) => n % 2 == 0).map((el) => (sum += el));
  return sum;
}
console.log(even_add(1, 2, 3, 4, 5, 6));
