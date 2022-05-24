// Convert a string to a number
const test1 = parseInt("123");
console.log(test1);

// Convert the first part of a string to a number
const test2 = parseInt("123 abc");
console.log(test2);

// Fails because the first part of the string is not a number
const test3 = parseInt("abc 123");
console.log(test3);

// Truncates an apparent float to an integer
const test4 = parseInt("3.14");
console.log(test4);