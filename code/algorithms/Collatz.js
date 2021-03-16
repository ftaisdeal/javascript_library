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

  //console.log(x);
  return count;
}

let longest = 0;

for (i = 13; i > 1; i--) {
  console.log(Collatz(i));

  temp = Collatz(i);

  if (temp > longest) {
    longest = i;
  }

}

console.log(longest);



// Get the function to spit out the iterative results
// Count how many results and record the number used
// Build a for loop that counts down from 1 million and records the number with the longest string of numbers