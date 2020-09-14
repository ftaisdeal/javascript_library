/*
A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
*/

// Solutions

function shouldServeDrinks1(age, onBreak) {
  if ((age >= 18) && (!onBreak)) {
    return true;
  } else {
    return false;
  }
}


const shouldServeDrinks2 = (age, onBreak) => age >= 18 && !onBreak;


function shouldServeDrinks3(age, onBreak) {
  return age >= 18 && !onBreak
}


function shouldServeDrinks4(age, onBreak) {
  return (age >= 18 && onBreak == false ? true : false);
}