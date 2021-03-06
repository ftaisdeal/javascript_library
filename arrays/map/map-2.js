// Examples using an array of objects

const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerrod' }
];

// Version 1 - verbose
var officersIds1 = officers.map(function (officer) {
  return officer.id;
});

console.log(officersIds1);

// Version 2 - compact
const officersIds2 = officers.map(officer => officer.id);

console.log(officersIds2);