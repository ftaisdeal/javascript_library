// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

// Solutions

const helloWorld1 = n => n % 3 == 0 && n % 5 == 0 ? "Hello World" :
  n % 3 == 0 ? "Hello" : "World";


function helloWorld2(num) {
  return (num % 3 === 0) && (num % 5 === 0) ? 'Hello World' : num % 3 === 0 ? 'Hello' : num % 5 === 0 ? 'World' : null;
}


function helloWorld3(num) {
  switch (true) {
    case (num % 3 === 0 && num % 5 === 0):
      return 'Hello World';
      break;
    case num % 3 === 0:
      return 'Hello';
      break;
    case num % 5 === 0:
      return 'World';
      break;
    default:
      return num;
      break;
  }
}