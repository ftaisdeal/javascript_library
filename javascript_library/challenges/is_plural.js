//  Write a function that determiness whether a word ends with an "s"

// Solutions

function isPlural1(word) {
  return word.endsWith("s");
}


function isPlural2(word) {
  return word[word.length - 1] == 's';
}


const isPlural3 = word => word.endsWith('s');


let isPlural4 = w => /s$/i.test(w);


function isPlural5(word) {
  return word[word.length - 1] === 's';
}


function isPlural6(word) {
  return word.charAt(word.length - 1) === 's'
}


isPlural7 = w => w.endsWith('s');


function isPlural8(word) {
  if (word.slice(-1) == 's') {
    return true;
  } else {
    return false;
  }
}