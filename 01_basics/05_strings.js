const name = "ajay "
const repoCount = 5

// console.log(name + repoCount + " Value");


// back-ticks are used in modern JS for string , as it is more readible and reliable 
// it is known as string interpolation.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//declaring a string 
const gameName = new String('hitesh-hc-com')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes starting spaces and ending spaces

const url = "https://google.com/ajay%20bakoliya"
console.log(url.replace('%20' , '-'))

console.log(url.includes('ajay')) // checks if the given text is present in your string or not.

console.log(gameName.split('-'));










