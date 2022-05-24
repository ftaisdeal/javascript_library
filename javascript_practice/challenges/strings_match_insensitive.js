// Write a function that determines whether two strings match, case insensitive

// Solutions

function match1(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}


match2 = (a, b) => a.toLowerCase() == b.toLowerCase();


function match3(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase() ? true : false;
}