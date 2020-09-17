// Create a function that determines whether or not it's possible to split a pie fairly
//given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

// Solutions:

function equalSlices1(total, people, each) {
  return people * each <= total
}


equalSlices2 = (t, p, e) => t >= p * e;


function equalSlices3(total, people, each) {
  return people * each <= total
}


function equalSlices4(total, people, each) {
  if (people === 0) {
    return true;
  } else if (each * people <= total) {
    return true;
  } else {
    return false;
  }
}