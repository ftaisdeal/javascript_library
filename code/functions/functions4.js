// There are diffent ways of defining functions:

function doSomething() {
  // do something
  console.log('something');
}

let doSomethingElse = function () {
  // do something else
  console.log('do something else');
}

const short = function doSomethingElseYetAgainWithaVeryLongName() {
  // short name to refer to function
  console.log('do something with a very long name');
}

doSomething();

doSomethingElse();

short();