/* Write a function that accepts base (decimal), height (decimal)
and shape ("triangle", "parallelogram") as input and calculate
the area of that shape. */

// Solutions

function areaShape1(base, height, shape) {
  return (shape === 'triangle' ? 0.5 : 1) * base * height;
}


function areaShape2(base, height, shape) {
  return shape === 'triangle' ? 0.5 * base * height : base * height;
}


const areaShape3 = (b, h, s) => /triangle/.test(s) ? b * h / 2 : b * h;


function areaShape4(base, height, shape) {
  if (shape == 'triangle') {
    return base * height / 2;
  } else if (shape = 'parallelogram') {
    return base * height;
  }
}