// You can return multiple lines of text, or an operation or method

function returnMultipleLines() {
  return ("some text " +
    "some more text " +
    "a calculation of 2 + 2: " +
    (2 + 2) +
    "\n2 to the 8th power is: " +
    Math.pow(2, 8));
}

console.log(returnMultipleLines());


function returnEvaluation() {
  return (2 > 1);
}

console.log(returnEvaluation());