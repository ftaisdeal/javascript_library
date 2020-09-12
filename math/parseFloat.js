// Convert strinng to float
const test1 = parseFloat("3.14");
console.log(test1);

// Convert strinng to float, ignoring additional text
const test2 = parseFloat("3.14 abc");
console.log(test2);

// Fails because there is text at the beginning
const test3 = parseFloat("abc 3.14");
console.log(test3);
