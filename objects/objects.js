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

obj.name = 'Sally'; // set new name
var name = obj.name; // declare variable from new name

console.log(name);

obj.details.grade = 9; // set new grade
var grade = obj.details.grade; // declare variable from new name

console.log(grade);

// Optional syntax
obj['name'] = 'Sandra'; // set new name
var name = obj['name']; // declare variable from new name

console.log(name);

obj['details']['grade'] = 12; // set new grade
var grade = obj['details']['grade']; // declare variable from new name

console.log(grade);