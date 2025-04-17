// console.log(2 > 1);

// console.log("2" > 1); //in js it allows to compare two datatypes but in typescript it doesn't allow to datatypes to compare
// console.log("02" > 1);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that equality check == and comparisons > < >= <= works differently.
// Comparisons convert null to a number , treating it as 0.
// That's why null >= 0 is true and null > 0 is false.

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

// === strict check , compares not only values but datatypes also
console.log("2" === 2); // false as datatype is different
