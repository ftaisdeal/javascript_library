// NaN pollutes results, making any result also NaN.

const nan = NaN + 5;

console.log(nan);

console.log(isNaN(123));
console.log(isNaN('a'));