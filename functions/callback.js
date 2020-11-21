function Test(callback) {

  result = callback(2);

}

function callback(int) {
  return int;
}

Test(callback);

console.log(result);