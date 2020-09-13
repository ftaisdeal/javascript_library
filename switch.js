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