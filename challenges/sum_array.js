// Create a function that takes an array and returns the sum of all numbers in the array.

// Solutions

const getSumOfItems1 = A => eval(A.join`+`);


const getSumOfItems2 = (arr) => arr.reduce((acc, val) => acc + val, 0);


function getSumOfItems3(arr) {
  return arr.reduce((total, ele) => total + ele);
}