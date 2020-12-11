/**
 * As part of an automated bracelet assembly system we need to generate
 * the pattern of colored beads used to construct a bracelet. This method
 * is responsible for taking in the available colors and final length
 * of the bracelet and returning the final pattern to be constructed.
 * There are two restrictions in the final pattern:
 *   1) No two adjacent beads may be the same color.
 *   2) No pattern of three beads may be repeated anywhere in the bracelet.
 *      For example (Red, Yellow, Red, Yellow, Red) repeats the pattern
 *      (Red, Yellow, Red) twice and would be a violation of this rule.
 *      (Red, Yellow, Blue, Green, Red, Yellow, Blue) would also violate this rule.
 *
 * @param colors - An array of unique Strings where each string represents a bead color.
 * @param size - The length of the bracelet to be constructed.
 * @return - An array of colors indicating the final order of beads that should be used to construct a bracelet.
 */
const generateBeads = function (colors /* array */, size /* number */) {

  beads = [];
  count = 0;

  beads.push(colors[0]);

  for (let i = 1; i < size; i++) {

    if (count >= colors.length) { // Reset to beginning of colors array
      count = 0;
    }

    if (colors[count] != beads[i - 1]) { // Prevent repetition of adjacent color
      beads.push(colors[count]);
    } else {
      i--;
    }

    count++;

  }

  return beads;

};

console.log(generateBeads(["Red", "Red", "Red", "Green", "Yellow", "Blue", "Blue", "Black"], 10));