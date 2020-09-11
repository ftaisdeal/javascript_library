function confirmEnding(str, target) {
  let str_length = str.length;
  let target_length = target.length;

  let start = str_length - target_length;
  let end = start + target_length;

  let test = str.substring(start, end);

  if (target == test) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }

}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Abstraction", "action");
confirmEnding("Connor", "n");