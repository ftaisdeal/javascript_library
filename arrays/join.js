// The join function converts an arraay to a string, with a designated separator between elements.

// Example 1
let array = [1, 2, 3, 4, 5];

let string = array.join(", ");

console.log(string);

// Example 2
let list = ["London", "Paris", "Amsterdam", "Berlin", "Prague"];

let destinations = list.join(", ");

let sched = `Visiting ${list.length} cities: ${destinations}`;

console.log(sched);