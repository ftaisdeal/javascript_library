// This function finds the largest number within each array of an array of arrays

function largestOfFour(arr) {
  result = arr.map(Function.apply.bind(Math.max, null));
  console.log(result);
  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
