// JavaScript has 8 Datatypes

// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// exponential Form
// let y = 123e5;    // 12300000
// let z = 123e-5;   // 0.00123


// JavaScript Arrays
// JavaScript arrays are written with square brackets.

// --------Array items are separated by commas.

// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";

// The following code declares (creates) an array called cars, containing three items (car names):
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// Example
// const cars = ["Saab", "Volvo", "BMW"];

// An array declared with const cannot be reassigned:

// Example
// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// An array declared with const must be initialized when it is declared.
// This will not work:
// const cars;
// cars = ["Saab", "Volvo", "BMW"];

// This is OK:
// cars = ["Saab", "Volvo", "BMW"];
// var cars;
// --------------------------

// const cars = ["Saab", "Volvo", "BMW"];
// // Here cars[0] is "Saab"
// {
//   const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
// }
// Here cars[0] is "Saab"

// ----------------------------
// const cars = ["Saab", "Volvo", "BMW"];
// // Here cars[0] is "Saab"
// {
//   const cars = ["Toyota", "Volvo", "BMW"];
//   // Here cars[0] is "Toyota"
// }
// // Here cars[0] is "Saab"


// An array declared with var does not have block scope:
// var cars = ["Saab", "Volvo", "BMW"];
// // Here cars[0] is "Saab"
// {
//   var cars = ["Toyota", "Volvo", "BMW"];
//   // Here cars[0] is "Toyota"
// }
// // Here cars[0] is "Toyota" ------------------------------- makes diff

// You can also create an array, and then provide the elements:

// Example
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// --------------------------------------
// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// Array:
// const person = ["John", "Doe", 46];



// Objects use names to access its "members". In this example, person.firstName returns John:

// Object:
// const person = {firstName:"John", lastName:"Doe", age:46};

// The easiest way to add a new element to an array is using the push() method:
// Example
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

// New element can also be added to an array using the length property:
// Example
// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits


// undefined holes are formed although there are no 6 elements lemon is added in 6th index 4 5 index contains undefined
// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";  // Creates undefined "holes" in fruits

// In JavaScript, arrays use numbered indexes.  [0] [1][2][3][4]

// In JavaScript, objects use named indexes. {person.name} {person.class}

// arrays can also be created with let studets=["kishore","junaid", "aslam"]
// (or)


// console.log(Array.isArray(students));


// to find out wheter given variable is array or not 
// let students=['kishore',"juaid"]
// let type=   typeof students;





// JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas

//by default array and object comes under object null is bug



//null means empty
// let x=null
// console.log(typeof(x));
// if update null typeof changes from null to entered 
// x="str"
// console.log(typeof(x));

// converting a number to bigint in two ways
// let x=BigInt(15654) //method 1
// let y=644n
// console.log(typeof(x));
// console.log(typeof(y));

// bigint numbers cant add normal numbers





