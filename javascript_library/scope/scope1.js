// A var variable has either global scope of function/local scope, depending on where it is declared.
// If var is declared outside of a function, it has global scope.
// If var is declared inside a function, it has function scope.

// A let variable has block scope, meaning that the variable is defined within curly braces: {}
// A let variable can be updated, but not re-declared.

// A const variable has block scope, and cannot be updated or re-declared.
// Because a const variable cannot be updated, it must be defined when it is initialized.
// Even though a const variable cannot be updated, the contents of an object defined with const can be changed.

// Example 1
var a = 1;
{
  var a = 2;
}
console.log(a); // Outputs 2

// Example 2
let b = 1;
{
  let b = 2;
  console.log(b); // Outputs 2
}
console.log(b); // Outputs 1