// This function finds the longest word in a string and returns its length.

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longest = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  console.log(longest);
  return longest;
}

let str = "The quick brown fox jumped over the lazy dog.";

findLongestWordLength(str);