const marvel_heros = ["thor" ,"Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]); 

// const allHeros = marvel_heros.concat(dc_heros) // to merge two arrays.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // also merge two arrays but it is more useful as it can merges more than two arrays.
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6], 7 , [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // here infinity is its depth you can use any number instead.
console.log(real_another_array);


console.log(Array.isArray("Ajay")) // checks if it is an array or not.
console.log(Array.from("Ajay")); // converts the given string in arguments in array format.
console.log(Array.from({name : "Ajay"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3)); // returns a new array from a set of elements.
