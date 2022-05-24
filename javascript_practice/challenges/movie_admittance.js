/* Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

The person is at least 15 years old.
They have parental supervision.

The function accepts two parameters, age and isSupervised. Return a boolean. */

// Solutions

function acceptIntoMovie1(age, isSupervised) {
  return age >= 15 || isSupervised
}


function acceptIntoMovie2(age, isSupervised) {
  if (age >= 15 || isSupervised) {
    return true
  } else {
    return false
  }
}