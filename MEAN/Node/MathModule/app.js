var newMath = require('./MathModule')();

console.log("Add Result: ", newMath.add(1, 2));
console.log("Multiply Result: ", newMath.multiply(5, 2));
console.log("Square Result: ", newMath.square(4));
console.log("Random Result: ", newMath.random(1000, 1020));
