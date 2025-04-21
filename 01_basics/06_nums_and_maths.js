const score = 400
// console.log(score);

const balance = new Number(100.2245)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // to fix precision
const otherNumber = 123.8956
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // with comas usually by default according to US standards.
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());  // Always between 0 and 1
console.log(Math.random()*10 + 1); // Always greater than 1 , means minimum value is 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)















