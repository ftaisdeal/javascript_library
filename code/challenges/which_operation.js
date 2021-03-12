// Write a function that takes two numbers and returns if they should be
// added, subtracted, multiplied or divided to get 24.
// If none of the operations can give 24, return null.

// Solutions

function operation1(num1, num2) {
  if (num1 + num2 == 24) { return "added" }
  if (num1 - num2 == 24) { return "subtracted" }
  if (num1 * num2 == 24) { return "multiplied" }
  if (num1 / num2 == 24) { return "divided" }
  return null
}


const operation2 = (x, y) =>
  x + y == 24 ? "added" :
    x - y == 24 ? "subtracted" :
      x * y == 24 ? "multiplied" :
        x / y == 24 ? "divided" : null;


function operation3(a, b) {
  return a + b == 24 ? "added"
    : a - b == 24 ? "subtracted"
      : a * b == 24 ? "multiplied"
        : a / b == 24 ? "divided"
          : null;
}


function operation4(num1, num2) {
  return num1 / num2 === 24 ? 'divided' : num1 * num2 === 24 ? 'multiplied' : num1 - num2 === 24 ? 'subtracted' : num1 + num2 === 24 ? 'added' : null
}


function operation5(num1, num2) {
  if (num1 + num2 === 24) {
    return 'added';
  } else if (num1 * num2 === 24) {
    return 'multiplied';
  } else if (num1 - num2 === 24) {
    return 'subtracted';
  } else if (num1 / num2 === 24) {
    return 'divided';
  } else {
    return null;
  }
}