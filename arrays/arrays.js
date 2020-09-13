// Note that array.length isn't necessarily the number of items in the array.
//Consider the following:

var a = ['dog', 'cat', 'hen'];

a[5] = 'fox'; // This makes the array length 6, with an undefined element at index 3 and 4.

console.log(a.length);

console.log(a[4]); // undefined

// Loop through the array
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// ES6 concise version of loop
for (const element of a) {
  console.log(element);
}