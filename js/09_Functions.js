// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//   }
//   Function arguments are the values received by the function when it is invoked. last line

//   When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":

// Why Functions?
// With functions you can reuse code

// You can write code that can be used many times.

// You can use the same code with different arguments, to produce different results.


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

// function evenodd(num) {
//     if (num%2==0) {
//         return `${num, "is even"}`
//     }
//     else {
//         return `${num, "is odd"}`
//     }
// }


// let result=evenodd (55);
// console.log(result);


// while using return gets stopped when the conditions Meet


//write a afunction to geneerae numbers from 1-100


// function one() {

// }
// for (let i=0; i<=100; i++) {
//     console.log("number", i)   
// }

// one()



// function range(i) { ----------- little typical

// }
// for (let i=0; i<=100; i++) {
//     if (i>=95 && i<=150)
//     console.log(i)   
// }
// range()


// function oddeven(x) {
// if (x%2==0) {
// console.log("its even");

// } else {
//     console.log("its odd");

// }
// }
// oddeven(5)




// function range(num1, num2) {
//  for (let i = num1; i<num2; i++) {
//    console.log(i);


//  }   
// }

// range (100,105)
// range(110,115)


// define a function that can asnswer the role a user can ve on following roles 
// admin with all access 
// subadmin with access of create/delete courses
// teacher with access to create/delete tests
// user- consume/view content only 
// other user guest



// function getUserRole(name,role) {
//     if (role=="admin") {
//  console.log("you have got all access");

//     } else if (role=="subadmin") {
//         console.log(name ,"can create/delete courses");

//     } else if (role=="teacher") {
//         console.log(name, "can create or delete tests");

//     } else if (role=="user") {
//         console.log(name, "consume or view content only");

//     } else if (role=="other") {
//         console.log(name, "guest user");

//     }

//     }
//     getUserRole ("kishore","teacher")


// function has two types of output with return and console

// function sum(x,y) {
//     console.log(x+y);

// }
// sum(5,5)

// function summ(a, b) {
//  /   s = a + b;
//     return s;
// }
// let x = summ(8, 9)
// console.log(x);

//arrow functions are writing of functions in compact way (smaller form)
// const sum=(a,b) =>{
//     console.log(a+b);

// }
// sum (1,6)


//written using arrow function
// const mul=(x,y) => {
//     ss=x*y
//     return ss
// }
// let o=mul (8,2)
// console.log(o);


//or

// const mul=(a,b) =>{
//     console.log(a*b);

// }
// mul (5,5)


// const sample=()=>{
//     console.log("hello wrld");

// }
// sample()  //can also be created in this way



//counting no of vowels in a string using function

// function vowelss(str) {
//     let count = 0
//     for (let x of str) {
//         if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
//             count++;

//         }

//     }
//     console.log(count);
// }
// vowelss("hello world")


//counting no of vowels fro a given string 
// function vowelcount(str) {
//     let count = 0
//     for (let x of str) {
//         if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
//             count++;
//         }
//     }
//     console.log(count);

// }
// vowelcount("heioujjjjdd")

// writing the same code using arrow function 
// only first line is different and remain is same

// let vowcount = (str) => {
//     let count = 0
//     for (let x of str) {
//         if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
//             count++
//         }
//     } console.log(count);


// }
// vowcount("baiga")


// for eachloop in Array (call back function)
// callback function is calling another function 
//for each is  a function...
//for each has 3 properties val,index,array 

// let Arraysx=[1,2,3,5,6]
// Arraysx.forEach(val => {
//     console.log(val);

// });

// let Arraysx=["apple","ball","Cat"]
// Arraysx.forEach(val,idx => {
//     console.log(val.toUpperCase());

// });

//to show powers of individual number
// let nums=[1,2,3,4,6  ]
// nums.forEach(val => {
//     console.log(val * val);

// });

// map is similar to for each but gives new array whereas for each dont give such type

// let num=[1,2,3,4,5]
// num.map((value)=>{
// console.log(value);
// })


// Filter() fileters out a specific conditon  ceates a new array
// let num = [1, 2, 3, 4, 5, 6]
// let nums = num.filter((nums) => {
//     return nums % 2 == 0
// })
// console.log(nums);



// reduce() is a code whihc gives one outputu by erforming operation on array and gives single value like CSSMathMax,min,average
// let num = [1, 2, 3, 4, 5, 6]
// let nums = num.reduce((res,current) => {
//     return res+current
// })
// console.log(nums);


//to retrun the hightest number from array
// let x = [1, 2, 4, 4, 94, 98, 4]
// let y = x.reduce((high, low) => {
//     return high > low ? high : low
// })
// console.log(y);


// similar problem finding marks of student above some number
// let marks=[54,8,78,848,84,88]
// let y=marks.filter((mark)=>{
//     return mark>80

// })
// console.log(y);

//printing numbers untill given number
// let n = 3
// let arr = []
// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i

// }
// console.log(arr);
// let sum = arr.reduce((prev, curr) => {
//     return prev + curr

// })
// console.log(sum);

// let factorial = arr.reduce ((prev, curr) => {
//     return prev * curr
// })

// console.log(factorial);
