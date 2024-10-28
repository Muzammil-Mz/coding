// console.log("we are so called \"Vikings\" from North");
// console.log('we are so called "Vikings" from North');



// Breaking Long Lines
// For readability, programmers often like to avoid long code lines.

// A safe way to break up a statement is after an operator:

// Example
// document.getElementById("demo").innerHTML =
// "Hello Dolly!";

// A safe way to break up a string is by using string addition:

// Example
// document.getElementById("demo").innerHTML = "Hello " +
// "Dolly!";

// as we leanrt in the past strings cant be objects but 
// we acan make strinn gto object by addding new 
// But strings can also be defined as objects with the keyword new:

// let y = new String("John"); ---------- not preferablse slows down execut



// Extracting String Characters
// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

// let text = "HELLO WORLD";
// let char = text.charAt(0);--- H

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);===H

// const name = "W3Schools";
// let letter = name.at(2);---- S



// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

// Example
// Slice out a portion of a string from position 7 to position 13:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13); ----- banana



// If you omit the second parameter, the method will slice out the rest of the string:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);------ banana, kiwi


// If a parameter is negative, the position is counted from the end of the string:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12); - banana, kiwi


// This example slices out a portion of a string from position -12 to position -6:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);- banana


//let text1 = "Hello World!";
// let text2 = text1.toUpperCase();

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();------------ removes whitespaces

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// Example
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart(); removes white spaces only from start similarly trimend()

// let text = "Hello world!";
// let result = text.repeat(2);-- HEllo world; Hello World gives two times output

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");


// By default, the replace() method replaces only the first match:

// Example
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// replacing is case sensitive inorder to remove uncase sensitive use /g which means global
// To replace all matches, use a regular expression with a /g flag (global match):

// Example
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");


// To replace case insensitive, use a regular expression with an /i flag (insensitive):

// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools"); 


// JavaScript String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// Example
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");


// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// Example
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("John");


// The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// Examples
// let text = "Please locate where 'locate' occurs!";
// text.search("locate");


// Examples
// Perform a search for "ain":

// let text = "The rain in SPAIN stays mainly in the plain";
// text.match("ain");


// Perform a global, case-insensitive search for "ain":

// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/gi);



// Check if a string includes "world":

// let text = "Hello world, welcome to the universe.";
// text.includes("world");


// Check if a string includes "world". Start at position 12:

// let text = "Hello world, welcome to the universe.";
// text.includes("world", 12);


// the startsWith() method returns true if a string begins with a specified value.

// Otherwise it returns false:

// Examples
// Returns true:

// let text = "Hello world, welcome to the universe.";
// text.startsWith("Hello");

// Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// let firstName = "John";
// let lastName = "Doe";

// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(" welcome ",text);


// let text2= (firstName, lastName)


//accessing each part of string using loop
// let x="hello world"
// for (let y of x) {
//     console.log(y);
    
// }