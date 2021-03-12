// Creaate function that takes in an array of numbers and returns a new array
// based on each number being greater than one number, and less than another nuumber

function arrBetween(num1, num2, arr) {
  return arr.filter(el => (el > num1) && (el < num2));
}

