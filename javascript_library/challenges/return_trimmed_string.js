// Create a function that takes a word and returns the new word without including the first character.

// Solutions

function newWord1(str) {
  return str.slice(1)
}


function newWord2(str) {
  return str.substring(1);
}


function newWord3(str) {
  let new_string = '';

  for (i = 1; i < str.length; i++) {
    new_string += str[i];
  }
  return new_string;

}