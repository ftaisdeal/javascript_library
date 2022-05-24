// Create a function that tests whether the square root of one number is equal to
// the cube root of a ssecond number.

// Solutions

const checkSquareAndCube1 = ([a, b]) => Math.sqrt(a) === Math.cbrt(b);


const checkSquareAndCube2 = ns => Math.sqrt(ns[0]) ** 3 === ns[1];


function checkSquareAndCube3(arr) {
  return (Math.cbrt(arr[1]) == Math.sqrt(arr[0])) ? true : false
}


function checkSquareAndCube4(arr) {
  return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}