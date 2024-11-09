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


let text="hello world";
let char = text.toUpperCase();
console.log(char)