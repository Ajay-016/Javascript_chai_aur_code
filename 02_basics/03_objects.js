// singleton

// object literals

const mySymbol = Symbol("Key1")

const JsUser = {  // object is created.
    name: "Ajay",
    "full name": "Ajay Bakoliya",
    [mySymbol]: "mykey1",          // correct way of adding symbol to object .
    age: 18,
    location: "Jaipur",
    email: "ajay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
} 

// console.log(JsUser.email);
// console.log(JsUser["email"]); // best way 
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "ajayverma@google.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser) // means now you cannot change the value of JsUser object values .

JsUser.greeting = function(){
    console.log("Hello Js User");   
}
JsUser.greeting_Two = function(){
    console.log(`Hello JS User ,${this.name}`);   
}
console.log(JsUser.greeting());
console.log(JsUser.greeting_Two());