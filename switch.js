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
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}


// Grouping of “case”
// Several variants of case which share the same code can be grouped.
// For example, if we want the same code to run for case 3 and case 5:

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// Now both 3 and 5 show the same message.

// The ability to “group” cases is a side-effect of how switch/case works without break.
// Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.