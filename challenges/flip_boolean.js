/* Create a function that returns the opposite of the given boolean, as a number.

flipBool(true) ➞ 0
flipBool(false) ➞ 1
flipBool(1) ➞ 0
flipBool(0) ➞ 1

*/

// Solutions
const flipBool1 = b => b ? 0 : 1;


function flipBool2(b) {
  return (!b) * 1;
}


function flipBool3(b) {
  return b === true || b === 1 ? 0 : 1;
}


flipBool4 = b => 1 - b;


const flipBool5 = b => b ^ 1;


function flipBool6(b) {
  if (b === true || b === 1) {
    return 0;
  } else {
    return 1;
  }
}


function flipBool7(b) {
  return b ? 0 : 1;
}


function flipBool8(b) {
  if (b) {
    return 0;
  } else {
    return 1;
  }
}