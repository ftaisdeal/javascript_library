/* Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"
*/

// Solutions

function nSidedShape1(n) {
  let shapes = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  }
  return shapes[n];
}


function nSidedShape2(n) {
  return ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'][n - 1];
}


const shapes = [
  "circle", "semi-circle", "triangle", "square", "pentagon",
  "hexagon", "heptagon", "octagon", "nonagon", "decagon"
]

const nSidedShape3 = n => shapes[n - 1];