// 1.variable.at() -- gives char present at given index starts from 0

// let text="Hello World"
// let text2 =text.at(6)
// console.log(text2);


// 2.The charAt(position) Method 
// let  text="irfan kothwal"
// let text2=text.charAt(2)
// console.log(text2);


// 3.The charcodeat() method gives specified elelment from string in utf code 16
// let text = "HELLO WORLD";
// let char = text.charCodeAt(2);
// console.log(char);


// 4.Slice - slices from mentioned number to end of string
// let text="hello world"
// let text2=text.slice(2)
// console.log(text2); //llo world


// let text="hello world"
// let text2=text.slice(2,7)
// console.log(text2); //gives output from start to of specifed number


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);- banana


// 5.The substring() method extract a part of a string and returns the extracted parts in a new string
// let text = "HELLO WORLD";
// let char = text.substring(2);
// console.log(char);

// 6.substr(index,length) -- extracts from the specifeied index and length from their eg
// let text = "HELLO WORLD";
// let char = text.substr(1,8); //extracted from 1 to 8 9 included
// console.log(char);

// let text = "HELLO WORLD";
// let char = text.substring(1,8);
// console.log(char); //extracted fromm 1 to 8 but, 8 excluded


// 7.toLowerCase() -- converts string to lowercase
// let text="HELLO WORLD";
// let char = text.toLowerCase();
// console.log(char)

// 8.toUpperCase(); - to upper case
// let text="hello world";
// let char = text.toUpperCase();
// console.log(char)

// 9.concat() joins two or more strings:
// let text="hello";
// let char = "world"
// console.log(text.concat(" ",char))


// let text="hello";
// let char = "world"
// console.log(text +" "+ char)

//Strings are immutable: Strings cannot be changed, only replaced.


// 10.trim()
// let text = "   HELLO WORLD          ";
// let char = text.trim(); //removes empty spaces from string
// console.log(text);


// 11.trimstart() -- remves white spaces from start only
// let text = "  HELLO WORLD";
// let char = text.trimStart(); //
// console.log(char);

// 12.trimstart() -- remves white spaces from start only
// let text = " HELLO WORLD   8";
// let char = text.trimEnd(); //
// console.log(char);


// 13.The padStart() method pads a string from the start - pading nothing but addition of extra material pattern or anything
// let text="hello"
// let game=text.padStart(10,"!") //here 10 is the number of times to pad and  ! is item to be padded 
// console.log(game);


// 14.The padStart() method pads a string from the start - pading nothing but addition of extra material pattern or anything
// let text="hello"
// let game=text.padEnd(10,"!") //here 10 is the number of times to pad and  ! is item to be padded 
// console.log(game);



// 15.The repeat() method returns a string with a number of copies of a string
// let text=" hello"
// let game=text.repeat(5)
// console.log(game);


// 16. replace() replaces the string with new values ,The replace() method replaces only the first match
// let text="Hello World"
// let text2=text.replace("Hello","hi")
// console.log(text2);


//replace(/string/i) changes only first 
// let text="Hello World Hello"
// let text2=text.replace(/hello/i,"hi")  //i is insensitive char here Hello is orig and hello is given
// console.log(text2);

// let text="Hello World Hello"
// let text2=text.replace(/Hello/g,"hi")  //g replaces all characters matching bt case sensit
// console.log(text2);

// 17.replaceall()
// let text="Hello World Hello"
// let text2=text.replaceAll(/Hello/g,"hi")
// console.log(text2);


// 18.indexof() -- gives index of String if doesnt find any match returns -1
// let text="Hello World Hello"
// let text2=text.indexOf("Hello") 
// console.log(text2);

// 19. string can be converted to an array with the split() method
// let text="Hello World Hello"
// let text2=text.split()
// console.log(text2);

// 20.search() searches specific term -- return -1 if not present 
// let text="Hello World Hello"
// let text2=text.search("2")
// console.log(text2);

// 21.include() checks whehthre presebt -- return false if not prsnt
// let text="Hello World Hello"
// let text2=text.includes("world")
// console.log(text2);

// 22. match shows where its located in the string can use global case insenitive prop
// let text="Hello World Hello"
// let text2=text.match("ello")
// console.log(text2);



// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// let text2=text.match(/cats/i);
// console.log(text2);



// 23.startswith checks if present in start
// let text="Hello World Hello"
// let text2=text.startsWith("Hello")
// console.log(text2);



// using for loop to seperate each element of str
// let text="Hello World Hello"
// for (let y of text){
//     console.log(y);
    
// }


// The String.fromCodePoint() static method returns a string created from the specified sequence of code points
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));



// The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units
// console.log(String.fromCharCode(189, 43, 190, 61));


// const a = 'réservé'; // With accents, lowercase
// const b = 'RESERVE'; // No accents, uppercase

// console.log(a.localeCompare(b));
// Expected output: 1
// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0


//localeCompare() returns one of 3 numbers indicating the sort order.

// -1 if sorted before`
// 1 if sorted after
// 0 if equal

// ​let text1 = "ab";
// let text2 = "cd";
// let result = text1.localeCompare(text2);//-1 AB COMES BEFORE CD



// let text1 = "cd";
// let text2 = "ab";
// let result = text1.localeCompare(text2);
// console.log(result);//+1 CD COMES AFTER AB
