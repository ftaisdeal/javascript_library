// What is the output of this code?

let number;  // This line turns out to be irrelevant within the code below, because let has block scope.

for (var i = 0; i < 5; i++) {
  number = i;
  setTimeout(function () {
    console.log(number);
  }, 1000);
}  // 4(5) - Prints out 4 five times

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
} // 5(5) - Prints out 5 five times