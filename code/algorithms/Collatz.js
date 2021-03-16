function callCollatz(x) {
  let count = 0;

  function Collatz(x) {
    if (x % 2 === 0) {
      x = x / 2;
      count++;
    } else {
      x = x * 3 + 1;
      count++;
    }
    if (x > 1) {
      Collatz(x);
    }
    return count;
  }

  return Collatz(x);
}

let longest = 0;
let winner;

for (i = 10000; i > 2; i--) {
  //console.log(callCollatz(i));

  if (callCollatz(i) > longest) {
    longest = callCollatz(i);
    winner = i;
  }

}

console.log(`${i} is the winner, with a string of numbers of length ${longest}.`);