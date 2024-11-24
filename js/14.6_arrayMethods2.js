// array at shows position of element in array
// let students=["kishore","jinaid","tasin","zaheer"]
// console.log(students.at(2));//tasin

// spread operator used to clone array
// let students=["kishore","jinaid","tasin","zaheer"]
// let teachers=["dp","drr","ln"]
// let staff=[teachers,...students]
// console.log(staff); //[ [ 'dp','drr','ln' ],'kishore','jinaid','tasin','zaheer' ]

// let students=["kishore","jinaid","tasin","zaheer"]
// let staff=[...students]
// console.log(students,staff); //['kishore','jinaid','tasin','zaheer'][ 'kishore','jinaid','tasin','zaheer']

// concat
// let students=["kishore","jinaid","tasin","zaheer"]
// let staff=["raju","junaid"]
// console.log(students.concat(staff)); //[ 'kishore', 'jinaid', 'tasin', 'zaheer', 'raju', 'junaid' ]

// constructor o create many objects of the same type.
// To create an object type we use an object constructor function.
// first lettr of object function is Capital
// function Char(name,age,classe){
//     this.name=name,
//     this.age=age,
//     this.classe=classe
// } 
// let student=new Char("ksihor",22,12)
// console.log(student); //Char { name: 'ksihor', age: 22, classe: 12 }


// copywithin , has a target , start,end
// // array.copyWithin(target, start, end) this simply array elemnts from one position to anohter, overwriting existing values
// let students=["kishore","jinaid","tasin","zaheer"]
// let toppers=students.copyWithin(2,0) //target of 2 index is overwritten by 0 index elemetn
// console.log(toppers); //[ 'kishore', 'jinaid', 'kishore', 'jinaid' ]

// The entries() method returns an iterator with the key/value pairs from an array:
// let students=["kishore","jinaid","tasin","zaheer"]
// let staff=students.entries()
// let text=" "
// for (let x of staff){
//     text+=x
// }
// console.log(text);//0,kishore1,jinaid2,tasin3,zaheer

// //every 
// /* The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements r false.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array

// */
// let age = [22, 55, 88, 77, 19]
// function agecheck(age) {
//     return age > 18
// }
// let res = age.every(agecheck)
// console.log(res);//true

// fill, fills all the elemetns with given elemtns
// let age = [22, 55, 88, 77, 19]
// let newage=age.fill(999)
// console.log(newage); //[ 999, 999, 999, 999, 999 ]

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// let age = [22, 55, 8, 7, 19]
// function newage(age){
//     return age>=18
// }
// let final=age.filter(newage)
// console.log(final);//[ 22, 55, 19 ]

// find- returns the value of firstly matched element from array from given condition
// let age = [22, 55, 88, 77, 19]
// function newage (age){
//     return age >50
// }
// let result=(age.find(newage));
// console.log(result);//55

// findindex of gives result of firstly matched conditions index 
// let age = [22, 55, 88, 77, 19]
// function agecheck(age) {
//     return age > 80
// }
// let result = age.findIndex(agecheck)
// console.log(result);//2

// findlastindex of gives result of lastly matched conditions index 
// let age = [22, 55, 88, 77, 19]
// function agecheck(age) {
//     return age > 76
// }
// let result = age.findLastIndex(agecheck)
// console.log(result);//3

// The flat() method concatenates sub-array elements. removes adjacent not nested
// let age = [[22, [[55]], [[88,], [77]], [10],19],[]]
// console.log(age.flat(3)); //[ 22, 55, 88, 77, 10, 19 ]
// console.log(age.flat(3)) //removes only 3 brackets
// console.log(age.flat(Infinity)); //removes all the array brakets

// includes checks for specific elemnts 
// let fruits=["banana","apple","jack","dragon"]
// console.log(fruits.includes("10"));//false

// flatmap() keeps the value and multiply with given to each element
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr); //1, 10,  2, 20,  3, 30,  4, 40,  5, 50, 6, 60

// forEach() he forEach method in JavaScript is used to iterate over the elements of an array. 
// It executes a provided function once for each array element.
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//     console.log(number * 2); // Multiply each number by 2 and print
// });


// array.from() accepts only string converts them to string 
// let students= 'abcdef'
// console.log(Array.from(students)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

// indexOf and lastindexof finds index from 
// const myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.lastIndexOf(6)); //6
// console.log(myArr.indexOf(3)); //2

// isarray
// const myArr = "1, 2, 3, 4, 5, 6";
// console.log(Array.isArray(myArr));//false

// join method joins all elements pf an array into a string with optional seperator
// const colors=["red","black","green","blude"]
// const colorsrt=colors.join('💋')
// console.log(colorsrt); //red💋black💋green💋blude

// let name="Hello World!"
// console.log(name.length);//12

// const myArr = ["Hello World!"];
// console.log(myArr.length);//1

// push
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.push(55));
// console.log(myArr);// 1, 6, 3,  4,5, 6, 6, 55


// pop
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.pop());//6
// console.log(myArr);[ 1, 6, 3, 4, 5, 6 ]

// shift removes 1 element from start
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.shift()); //1
// console.log(myArr); //[ 6, 3, 4, 5, 6, 6 ]

// unshift
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.unshift(1));
// console.log(myArr); //1, 1, 6, 3,4, 5, 6, 6

// sort
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.sort());
// console.log(myArr);//1, 3, 4, 5,6, 6, 6

// sort onlu for atrings
// let name=["juanid","anas","faraz","kishore"]
// console.log(name.sort()); //[ 'anas', 'faraz', 'juanid', 'kishore' ]


// const numb=[25,9,99,1000,100,0,65] //
// console.log(numb.sort((a,b)=>a-b)); //0,  9,  25,65, 99, 100,1000

// let names=["juanid","anas","faraz","kishore"]
// console.log(names.reverse()); //[ 'kishore', 'faraz', 'anas', 'juanid' ]

// const numb=[25,9,99,1000,100,0,65] //
// for(let x=numb.length;x>=0;x--){
//     console.log(x);
// }
// console.log(numb.reverse());   // 65,  0, 100,1000, 99,   9,  25

// The map method in JavaScript is used to create a new array by applying a provided function to every element '
// of the original array. Unlike forEach, it returns a new array based on the results of the function.

// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map((number) => {
//     return number * 2; // Multiply each number by 2
// });

// console.log(doubled); // [2, 4, 6, 8, 10]