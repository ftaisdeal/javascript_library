// The join function converts an arraay to a string, with a designated separator between elements.

// Example 1
const array = [1, 2, 3, 4, 5];

const string = array.join(", ");

console.log(string);

// Example 2
const list = ["London", "Paris", "Amsterdam", "Berlin", "Prague"];

const destinations = list.join(", ");

const sched = `Visiting ${list.length} cities: ${destinations}`;

console.log(sched);