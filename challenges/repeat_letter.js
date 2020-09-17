// Create a function that returns the string "Burp" with the amount of "r's"
// determined by the input parameters of the function.

// Solutions

const longBurp1 = n => `Bu${'r'.repeat(n)}p`;


function longBurp2(num) {
  return "Bu" + "r".repeat(num) + "p";
}