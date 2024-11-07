//explicit 
// 1.number method
// 2.string method
// 3.boolean method

// let result
// result=Number ("60")
// console.log(result,typeof(result));

// let result
// result=Number (false)
// console.log(result,typeof(result));





// / Type Conversions

/*
The process of converting data of one type to another type

Example : String to Nunber
*/

/*
There are 2 Types of conversions in JS

1.Implicit Conversion
2.Explicit Conversion

 
*/

// Implicit conversions happen automatically when
// JavaScript tries to perform an operation between
//different types, converting values to a common type.

/*
Explicit conversions require functions or methods
 to manually convert types. 
 Common functions are String(), Number(), and Boolean()
 
 

List of DataTypes 

1.String ===> Number,Boolean,null,undefiend
2.Number ===> String ,Boolean,null,undefiend
3.Boolean ===> String,Number,null,undefiend
4.null =====> String,Number,Boolean,undefiend
5.undefined ====>String,Number,Boolean,null

 
*/

// Implicit Conversion

// 1. Any DataType to String (using + operator)

// let marks = 2 + "0";
// console.log(marks, typeof marks);

// marks = "3" + 4;
// console.log(marks, typeof marks);

// marks = "3" + undefined;
// console.log(marks, typeof marks);

// marks = "5" + null;
// console.log(marks, typeof marks);

// marks = false + "10";
// console.log(marks, typeof marks);

// let number = 5 + "5";
// console.log(number,typeof number);

// Any DataType to Number (using with  -. / , *)

// let results;
// results = "4" - 2; //2 num
// results = 4 + 5 //9 num
// results = "4" - 3; //num
// results = "hello" - "hi"; // nan
// results = "5" - "hi"; //nan
// results = "5" - true; 4 numb

// console.log(results, typeof results);

// Any Datatype to Boolean

// let check;
// check = "5" + true; //5true
// check = "10" - true;// 9 num

// check = "4" - false; //4 numb

// True = 1
// False = 0

// check = 4 - true; 3 num
// console.log(check, typeof check);

// Null to Number
// null = 0

// let test;
// test = 4 - null;//4 num
// test = 4 + null;//4 num
// console.log(test, typeof test);

// Any DataType to undefined

// let final;

// final = undefined + "Test"; undefintest string
// final = 5 - undefined;//nan

// console.log(final, typeof final);

// explicit
// let results;

// results = Number("60"); 60
// results = Number(false) // 0 numb
// results = Number("30") //30 num
// results = Number("Hello") //nan
// results = Number(undefined) //nan


// console.log(results, typeof results);

//nested condn
// let score = 99;

// if (score > 60) {
//   console.log("You passed.");
//   if (score >= 90) {
//     console.log("Congratulations! You passed with honors.");
//   } else {
//     console.log("Good job on passing!");
//   }
// } else {
//   console.log("You failed the test.");
// }