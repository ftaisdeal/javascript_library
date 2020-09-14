// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// Solutions

function isEvenOrOdd1(num) {
  return num % 2 == 0 ? "even" : "odd";
}


isEvenOrOdd2 = n => n % 2 ? 'odd' : 'even';


isEvenOrOdd3 = (n) => [`even`, `odd`][n & 1];