// This code will only work in a browser, because of the window.location and localStorage references

var str = '{"names":[' + // create JSON object
  '{"first":"Hakuna","lastN":"Matata" },' +
  '{"first":"Jane","lastN":"Doe" },' +
  '{"first":"Air","last":"Jordan" }]}';
obj = JSON.parse(str); // parse
console.log(obj.names[1].first); // access


var myObj = { "name": "Jane", "age": 18, "city": "Chicago" }; // create object
var myJSON = JSON.stringify(myObj); // stringify
window.location = "demo.php?x=" + myJSON; // send to php


myObj = { "name": "Jane", "age": 18, "city": "Chicago" };
myJSON = JSON.stringify(myObj); // storing data
localStorage.setItem("testJSON", myJSON);
text = localStorage.getItem("testJSON"); // retrieving data 
obj = JSON.parse(text);
console.log(obj.name);