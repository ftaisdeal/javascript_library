// What is the output of this code?

let number;

for (var i = 0; i < 5; i++) {
  number = i;
  setTimeout(function () {
    console.log(number);
  }, 1000);
}  // 4(5)

// A var variable has function scope.

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
} // 5(5)
