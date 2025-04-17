// Datatypes is divided in 2 ways of how they are being stored in memory and accessed 
// (1) Primitive ---> Call by value  
// (2) Non-Primitive / Reference Type

// Primitive
// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt 


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);


const bigNumber = 348756287658723465786n // use n in last of number to convert it into bigint



// IMPORTANT : JavaScript is a dynamically typed language.
//That means you don’t have to declare variable types explicitly — the type is determined at runtime based on the value assigned.
//TypeScript — it’s basically JavaScript with static typing added on top and it’s enforced at compile-time, not runtime.



// Reference Type (Non Primitive) ----> call by reference
// Array , Objects , Functions 
// Note : Learn about Objects and Web Events in JS to master it .

const heroes = ["shaktiman" , "naagraj" , "doga"] // Array
let myObj = { // Object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //functions
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *******************************************************************************


// Stack memory is used for (Primitive Data Types) , Heap memory is used for (Non- Primitive Data Types).

let myYoutubeName = "ajay123"

let anothername = myYoutubeName
anothername = "hellofolks"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ajay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



