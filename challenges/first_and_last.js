// Write a function that concatenates the first and last letters of a string

// Solutions

function firstLast1(name) {
  return name[0] + name[name.length - 1];
}


const firstLast2 = n => n[0] + n.slice(-1);


function firstLast3(name) {
  return name.charAt(0) + name.charAt(name.length - 1);
}


const firstLast4 = name => name[0] + name[name.length - 1];


function firstLast5(name) {
  return name.slice(0, 1) + name.slice(name.length - 1)
}