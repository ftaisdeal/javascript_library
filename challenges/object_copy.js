// Write a function that returns a copy of an oobject

/// Solutions

function makeCopy1(obj) {
  return { ...obj }
}


const makeCopy2 = obj => ({ ...obj });


function makeCop3(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function makeCopy4(obj) {
  return Object.assign({}, obj);
}


function makeCopy5(obj) {
  objCopy = Object.assign({}, obj);
  return objCopy;
}