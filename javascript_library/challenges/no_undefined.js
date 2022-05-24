// Write a function that defines a default value even when no parameter is passed into the function

// Solutions

const moodToday1 = mood => `Today, I am feeling ${mood || 'neutral'}`;


const moodToday2 = (mood = "neutral") => `Today, I am feeling ${mood}`;


function moodToday3(mood) {
  return `Today, I am feeling ${mood || "neutral"}`
}


function moodToday4(mood = "neutral") {
  return `Today, I am feeling ${mood}`;
}