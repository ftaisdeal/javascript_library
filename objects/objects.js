// Objects

// Example 1
var test = { prop1: "this is prop 1", prop2: "this is prop 2" };

test.prop1 = "this is prop 1" ? console.log("yes") : console.log("no");

// Example 2
var car = {
  company: "Kia",
  details: {
    color: "silver",
    mileage: "27k",
  },
};

console.log(
  `Our car is a ${car.company}.  It is ${car.details.color}, and we have driven it about ${car.details.mileage} at this point.`
);


// Example 2
var student = {                 // object name
  firstName: "Jane",           // list of properties and values
  lastName: "Doe",
  age: 18,
  height: 170,
  fullName: function () {     // object function
    return this.firstName + " " + this.lastName;
  }
};
student.age = 19;           // setting value
student['age']++;             // incrementing
name = student.fullName();  // call object function

console.log(name);