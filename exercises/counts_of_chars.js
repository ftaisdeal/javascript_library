const string = "This is just a piece of random text for testing.";
const obj = {};

for (i = 0; i < string.length; i++) {

  if (!(string[i] in obj)) {

    obj[string[i]] = 1;

  } else {

    obj[string[i]]++;

  }

}

console.log(obj);