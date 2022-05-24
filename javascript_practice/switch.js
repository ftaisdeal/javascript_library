/* A switch statement is functionally equivalent to a series of if/else statements. 
Without a "breaak" statement, the switch falls through to the next option.
Each option can include declaration of variables, functions, calculations, string
concatenations, or any other kind of code.
*/

let x = '';

let number = '';

switch (x) {
  case 1:
    number = 'one';
    break;

  case 2:
    number = 'two';
    break;

  default:
    number = 'not declared';

}

console.log(number);


// Both switch and case allow arbitrary expressions.  For example:

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
}


// Grouping of “case”
// Several variants of case which share the same code can be grouped.
// For example, if we want the same code to run for case 3 and case 5:

let a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

// Now both 3 and 5 show the same message.

// The ability to “group” cases is a side-effect of how switch/case works without break.
// Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.


// Type matters
// Let’s emphasize that the equality check is always strict. The values must be of the same type to match.
// For example, let’s consider the code:

let arg = "3";

switch (arg) {
  case '0':
  case '1':
    console.log('One or zero');
    break;

  case '2':
    console.log('Two');
    break;

  case 3:
    console.log('Never executes!');
    break;
  default:
    console.log('An unknown value');
}

// For 0, 1, the first alert runs.
// For 2 the second alert runs.
// But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3.
// So we’ve got a dead code in case 3! The default variant will execute.