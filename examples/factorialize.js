// This function computes the factorial of the number passed into the function

function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }

  console.log(product);
  return product;
}

factorialize(5);
