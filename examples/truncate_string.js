/* Build a function that accepts a string and a number as arguments.
If the length of the string is greater than the number, return a 
substring of the string the length of the number, starting from the
beginning of the string and adding "...".
*/

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("We hold these truths to be self-evident", 22);