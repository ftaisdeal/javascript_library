// Write a function that returns 'int' if the input is an integer, and 'str' if the input is a string.

// Solutions

const intOrString1 = (param) => typeof param === 'string' ? 'str' : 'int';


function intOrString2(param) {
  return param * 0 === 0 ? 'int' : 'str'
}


function intOrString3(param) {
  return typeof param == 'number' ? 'int' : 'str';
}