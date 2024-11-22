// JavaScript Objects
// Objects are variables too. But objects can contain many values.

// objects generally defined with const keyword
// An object literal is a list of name:value pairs inside curly braces {}.


// Accessing Object Properties
// const person={
//     name:"kishore",
//     classs:"mbbs",
//     area:"nagkl"
// };
// person.name;
// // person["class"]


// In JavaScript, Objects are King.
// objects are containers for properties and methods 
// properties are named values
// methods are functions stored as properties
// properties can be primitive values functions  or even the objects

// A primitive value is a value that has no properties or methods.
// A primitive data type is data that has a primitive value.
// primitive vlaues are data types {string
//     number
//     boolean
//     null
//     undefined
//     symbol
//     bigint}
// js  everything are objects except primitive 


// Primitive values are immutable (they are hardcoded and cannot be changed).
// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

// If person is an object, the following statement will not create a copy of person:


// Nested Objects
// Property values in an object can be other objects:

// Example
let myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}



// const student={
//     name:"kishore",
//     class:"mbbs",
//     roll:52,
// }

// student.name= function() {
//     return this.name +"is studying in"+ this.class;
// };

// objects cant be compared if compared always gives false     
// let x = new String("John");
// let y = new String("John");

//objects can be accessed in two ways by using . method and key mention

// let fruit={
//     king:"mago",
//     queen:"pine",
//     kiww:"black"
// }
// // console.log(fruit.king);
// console.log(fruit['king']); //2nd methd of accessing this 

//some fun with objects-- created kings = raja ... pushed with king using 2nd method without string when logged raja as output though pushed with king
//if pushed with kings raja wont be output its kings itself due to use of strings
// const  jamun="guava"
// const fruit={
//     yellow:"mago",
//     brown:"pine",
//     black:"kiwi"
// }
// fruit[jamun]='red'
// console.log(fruit);


//accessing key value pairs in objects using loops

// const fruit={
//     yellow:"mago",
//     brown:22,
//     black:"kiwi"
// }
// for(let x in fruit){ //this gives just keys of obj
//     console.log(x);

// }

// const fruit={
//     yellow:"mago",
//     brown:22,
//     black:"kiwi"
// }
// for(let x in fruit){ //
//     console.log(fruit.x); //this gives undefined
// }

const fruit={
    yellow:"mago",
    brown:22,
    black:"kiwi"
}
for(let x in fruit){ //
    console.log(x,":",fruit[x]); //this gives values
}


//to get both key and values useing temp string
// const fruit = {
//     yellow: "mago",
//     brown: 22,
//     black: "kiwi"
// }
// for (let x in fruit) { //
//     console.log(`${x}:${fruit[x]}`)//
// }



// or

// const fruit = {
//     yellow: "mago",
//     brown: 22,
//     black: "kiwi"
// }
// for (let x in fruit) { //
//     console.log(x,fruit[x])//
// }


//to get in object format --- pendign


