// Types of JavaScript Operators

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// 1. Arithmetic Operators:
// Operator	Description
// +	        Addition
// -	        Subtraction
// *	        Multiplication
// **	        Exponentiation (ES2016)
// /	        Division
// %	        Modulus (Division Remainder)
// ++	        Increment
// --	        Decrement


// operator and operand 10+55 --- 10 and 55 are operand + is operator


// let x = 100 + 50 * 3=250; multiplication and divison given proiority
// let x = (100 + 50) * 3; firstly in brackets then next 150*3



// 2. Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Operator	Description
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator






// 3.JavaScript Comparison Operators
// Operator	Description
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator

// 4.Adding two numbers, will return the sum, but adding a number and a string will return a string:

// 5.  JavaScript Logical Operators
// Operator	Description
// &&	logical and
// ||	logical or
// !	logical not

// 6. JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Operator	    Description	    Example	        Same as	        Result	    Decimal
// &	                 AND	     5 & 1	        0101 & 0001	    0001	        1
// |	                 OR	         5 | 1	        0101 | 0001	    0101	        5
// ~	                 NOT	     ~ 5	         ~0101	        1010	        10
// ^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
// <<	left shift	5 << 1	0101 << 1	1010	 10
// >>	right shift	5 >> 1	0101 >> 1	0010	  2
// >>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2


// 8.JavaScript Type Operators
// Operator	Description
// typeof	    Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type


// 1. The logical AND assignment operator (&&=) combines this behavior with assignment:
// falsy - zero unassigned 
// truthy some value

// If the left-hand side is falsy, it leaves it unchanged. 
// If the left-hand side is truthy, it assigns the value of the right-hand side to the left-hand side.

// 2. Logical OR Assignment (||=)
// The logical OR assignment operator (||=) combines this behavior with assignment:

// If the left-hand side is truthy, it remains unchanged.
// If the left-hand side is falsy, it assigns the value of the right-hand side to the left-hand side.


// 3.Nullish Coalescing Assignment (??=)
// The nullish coalescing assignment operator (??=) combines this behavior with assignment:

// If the left-hand side is null or undefined, the right-hand side is assigned to the left-hand side.
// If the left-hand side is any other value, it remains unchanged.


// let x = 16 + 4 + "Volvo"; ------- 20Volvo
// let x="volvo"+16+4=---------- volvo164