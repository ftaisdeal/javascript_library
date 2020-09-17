// Write a function that takes in a string and evaluates whether the fraaction is greater than 1

// Solutions

const greaterThanOne1 = frac => eval(frac) > 1;


function greaterThanOne2(frac) {
  return eval(frac) > 1;
}


const greaterThanOne3 = fraction => {
  const [numerator, denominator] = fraction.split('/');
  return numerator / denominator > 1;
}


function greaterThanOne4(frac) {
  let arr = frac.split("/");
  return arr[0] / arr[1] > 1;
}