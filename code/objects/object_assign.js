const obj1 = {
  a: 0,
  b: 2,
  c: 4
};

const obj2 = Object.assign({ c: 5, d: 6 }, obj1);

console.log(obj2.c, obj2.d);