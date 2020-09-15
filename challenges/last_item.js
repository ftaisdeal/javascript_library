// Create a function that accepts an array and returns the last item in the array.

// Solutions

function getLastItem1(arr) {
  return arr[arr.length - 1]
}


function getLastItem2(arr) {
  return arr.pop();
}


const getLastItem3 = arr => arr[arr.length - 1];


const getLastItem4 = a => a.slice(-1)[0];


let getLastItem5 = x => x.pop()