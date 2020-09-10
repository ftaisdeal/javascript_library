/*
The Map object holds key-value pairs and remembers the original insertion order of the keys.
Any value (both objects and primitive values) may be used as either a key or a value.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

// Example 1
const myMap = new Map();

myMap.set("one", 1);
myMap.set("two", 2);

if (myMap.has("two")) {
  console.log("two");
} else {
  console.log(myMap.get("one"));
}

console.log(myMap.size);


// Example 2
let contacts = new Map()
contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" })
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', { phone: "617-555-4321", address: "321 S 2nd St" })
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
console.log(contacts.get('Hilary'));

let Hilary = contacts.get('Hilary');
console.log(Hilary.phone);
console.log(Hilary.address);


// Example 3: Iteration over Maps
let myMap2 = new Map()
myMap2.set(0, 'zero')
myMap2.set(1, 'one')

for (let [key, value] of myMap2) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (let key of myMap2.keys()) {
  console.log(key)
}
// 0
// 1

for (let value of myMap2.values()) {
  console.log(value)
}
// zero
// one

for (let [key, value] of myMap2.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

myMap2.forEach(function (value, key) {
  console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = one