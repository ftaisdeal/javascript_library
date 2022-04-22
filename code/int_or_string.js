/*
Write a function that returns 'int' if the input is an integer, 
and 'str' if the input is a string.
*/

// Solution 1
const intOrString1 = (param) => typeof param === 'string' ? 'str' : 'int';

// Solution 2
function intOrString2(param) {
  return param * 0 === 0 ? 'int' : 'str';
}

// Solution 3
function intOrString3(param) {
  return typeof param == 'number' ? 'int' : 'str';
}