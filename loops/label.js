// A "label" allows you to break out of an inner loop

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = console.log(`Coords (${i},${j})`, '');

    // condition for breaking oot of both loops
    if (i == 2) break outer; // (*)

    // do something with the value...
  }
}

console.log('Done!');