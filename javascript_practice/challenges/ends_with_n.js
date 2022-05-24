// Write a function that determines whether a string ends with "n"

// Solutions

function isLastCharacterN1(word) {
  return word.endsWith('n')
}


function isLastCharacterN2(w) {
  return w[w.length - 1] === "n";
}


function isLastCharacterN3(word) {
  return /n$/.test(word);
}


function isLastCharacterN4(word) {
  return [...word].pop() == "n"
}


function isLastCharacterN5(word) {
  return word.substr(-1) == "n";
}


function isLastCharacterN6(word) {
  if (word.charAt(word.length - 1) == 'n') {
    return true;
  } else {
    return false;
  }
}


function isLastCharacterN7(word) {
  if (word.slice(-1) === 'n') {
    return true;
  } else {
    return false;
  }
}