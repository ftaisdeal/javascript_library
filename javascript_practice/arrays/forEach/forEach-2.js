// Example using a function passed into forEach

const count = [5, 4, 3, 2, 1];

function setTitle(title) {
  console.log(title);
}

count.forEach(setTitle);
