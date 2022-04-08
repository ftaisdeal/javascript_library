// What is the output of the code below?
// Keep in mind that setTimeout is not a part of JavaScript,
// but is an API call sent to the browser.

// Example 1
for (var i = 0; i < 5; i++) {
  number = i;
  setTimeout(function () {
    console.log(number);
  }, 1000);
}
// 4(5) - Prints out 4 five times

// Example 2
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 5(5) - Prints out 5 five times

// Example 3
for (let i = 0; i < 5; i++) {
  number = i;
  setTimeout(function () {
    console.log(number);
  }, 1000);
}
// 4(5) - Prints out 4 five times

// Example 4
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 5(5) - Prints out 0 1 2 3 4