// Example 3
var student = { // object name
  firstName: "Jane", // list of properties and values
  lastName: "Doe",
  age: 18,
  height: 170,
  fullName: function () {  // object function
    return this.firstName + " " + this.lastName;
  }
};
student.age = 19; // setting value
student['age']++; // incrementing
name = student.fullName(); // call object function

console.log(name);