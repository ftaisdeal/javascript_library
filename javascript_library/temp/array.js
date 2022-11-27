const arr = [2, 3, 4];
const [MysteryOne, ...rest] = arr;
const MysteryTwo = [...rest, ...arr, MysteryOne];

console.log(MysteryTwo);