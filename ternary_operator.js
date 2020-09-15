/*
The conditional (ternary) operator is the only JavaScript operator that takes three operands:
a condition followed by a question mark (?), then an expression to execute if the condition is truthy
followed by a colon (:), and finally the expression to execute if the condition is falsy.
This operator is frequently used as a shortcut for the if statement.
*/

const age = 21;

let allowed = (age > 18) ? true : false;

function getFee(allowed) {
  return (allowed ? '$2.00' : '$10.00');
}

console.log(getFee(allowed));


let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
      'What an unusual age!';

console.log(message);
