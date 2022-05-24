/* For any given string, detect whether the string contains any duplicate characters.
If any duplicate character is detected, return false.
If no dupiicate characters are detected, return the string. */

function detect_duplicate(string) {

  let test_array = [];

  for (i = 0; i < string.length; i++) {

    if (test_array.indexOf(string[i]) == -1) {

      test_array.push(string[i]);

    } else {

      console.log('duplicate');
      return false;

    }

  }

  console.log(string);
  return string;

}

detect_duplicate("abc");
detect_duplicate("abcc");