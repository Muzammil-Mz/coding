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
// myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }


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