// Arrays

const myArr = [0,1,2,3,5, true , "hitesh"] // elements of array can be of different types.
/*             Javascript Arrays are resizable.                */

// console.log(myArr[2]); // 0-based indexing
const myHeroes = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1 , 2 , 3 , 4)
// console.log(myArr2[2]);


// Array Methods
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

myArr.unshift(9) // not a good practice as it inserts element at the starting of the array so we have to shift all the values .
myArr.shift() // removes first element.

// console.log(myArr.includes(9)); // checks whether 9 is present in array or not.
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3)); // gives the index of this element.


const newArr = myArr.join()
// console.log(myArr);  // in the format of array.
// console.log(newArr); // in the format of string.



// slice , splice

// console.log("A" , myArr);

console.log("A" , myArr);
const myn1 = myArr.slice(1,3); // 1 index in included while 3 is excluded.
console.log(myn1);
console.log("B" , myArr);


const myn2 = myArr.splice(1,3) // 1 index is included while 3 is included.
console.log("C" , myArr); // splice manipulates the original array and removes the elements between the indices provided in splice arguments.
console.log(myn2);










