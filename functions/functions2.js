// This is a simple example of a function having a return value of another function.

function log() {
  console.log('function called');
}

function test() {
  return log();
}

test();