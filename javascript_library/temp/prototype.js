class mystery { }
const mysteryProto = Object.getPrototypeOf(mystery);
console.log(mysteryProto === Function.prototype);