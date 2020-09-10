try { // block of code to try
  // Do something
}
catch (err) { // block to handle errors
  console.log(err.message);
}


var x = "a"; // get input value
try {
  if (x == "") throw "empty"; // error cases
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x > 10) throw "too high";
}
catch (err) { // if there's an error
  console.log("Input is " + err); // output error
}
finally {
  console.log("Code finished"); // executed regardless of the try / catch result
}


/*
RangeError A number is "out of range"
ReferenceError An illegal reference has occurred
SyntaxError A syntax error has occurred
TypeError A type error has occurred
URIError An encodeURI() error has occurred
*/
