// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

/* The splice() method changes the contents of an array by removing or replacing
existing elements and/or adding new elements in place. */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, "Feb");
// Inserts an element at index 1
console.log(months);
// Expected output: [ 'Jan', 'Feb', 'March', 'April', 'June' ]

months.splice(4, 0, "May");
// Adds 1 element at index 4
console.log(months);
// Expected output: [ 'Jan', 'Feb', 'March', 'April', 'May', 'June' ]

months.splice(6, 2, "July", "August");
// Adds two element starting at index 6
console.log(months);
// Expected output: [ 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August' ]