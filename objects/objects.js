/* Objects are hierarchical collections of name-value pairs that can contain
strings, numbers, floats, booleans, arrays, and functions.
*/

// An object can be declared two different ways:

let ob1 = new Object(); // discouraged

let ob2 = {}; // preferred

// Object literal syntax can be used to initialize an object in its entirety:
var obj = {
  name: 'Tracy',
  role: 'student',
  details: {
    sex: 'female',
    grade: 10
  }
};

console.log(obj.details.grade);
console.log(obj['details']['grade']); // same as line above