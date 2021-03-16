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

for (i = 1000000; i > 2; i--) {

  if (callCollatz(i) > longest) {
    longest = callCollatz(i);
    winner = i;
  }

}

console.log(`${winner} is the winner, with a string of numbers of length ${longest}.`);