// Write a function that determines whether a paramenter is included in the array

// Solutions

const check1 = (arr, el) => arr.includes(el);


function check2(arr, el) {
  return arr.includes(el);
}


function check(arr, el) {
  return arr.indexOf(el) > -1;
}