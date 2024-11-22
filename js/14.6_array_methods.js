//array at shows position of element in array
// let students=["kishore","jinaid","tasin","zaheer"]
// console.log(students.at(2));

//spread operator used to clone array
// let students=["kishore","jinaid","tasin","zaheer"]
// let teachers=["dp","drr","ln"]
// let staff=[teachers,...students]
// console.log(staff);

// let students=["kishore","jinaid","tasin","zaheer"]
// let staff=[...students]
// console.log(students,staff);


// let students=["kishore","jinaid","tasin","zaheer"]
// let staff=[...students,"raju","kdirti"]
// console.log(staff);


//concat
// let students=["kishore","jinaid","tasin","zaheer"]
// let staff=["raju","junaid"]
// console.log(students.concat(staff));


//constructor o create many objects of the same type.
//To create an object type we use an object constructor function.
//first lettr of object function is Capital
// function Char(name,age,classe){
//     this.name=name,
//     this.age=age,
//     this.classe=classe
// } 
// let student=new Char("ksihor",22,12)
// console.log(student);



//copywithin , has a target , start,end
// // array.copyWithin(target, start, end) this simply array elemnts from one position to anohter, overwriting existing values
// let students=["kishore","jinaid","tasin","zaheer"]
// let toppers=students.copyWithin(2,0) //target of 2 index is overwritten by 0 index elemetn
// console.log(toppers);

// The entries() method returns an iterator with the key/value pairs from an array:
// let students=["kishore","jinaid","tasin","zaheer"]
// let staff=students.entries()
// let text=" "
// for (let x of staff){
//     text+=x
// }
// console.log(text);



//every 
/* The every() method executes a function for each array element.
    
The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array

*/
// let age = [22, 55, 88, 77, 19]
// function agecheck(age) {

//     return age > 18

// }
// let res = age.every(agecheck)
// console.log(res);

//fill, fills all the elemetns with given elemtns
// let age = [22, 55, 88, 77, 19]
// let newage=age.fill(999)
// console.log(newage);

//The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


// let age = [22, 55, 8, 7, 19]
// function newage(age){
//     return age>=18
// }
// let final=age.filter(newage)
// console.log(final);




//find- returns the value of firstly matched element from array from given condition
// let age = [22, 55, 88, 77, 19]
// function newage (age){
//     return age >50
// }
// let result=(age.find(newage));
// console.log(result);

//findindex of gives result of firstly matched conditions index 
// let age = [22, 55, 88, 77, 19]
// function agecheck(age) {
//     return age > 80
// }
// let result = age.findIndex(agecheck)
// console.log(result);


//findlastindex of gives result of lastly matched conditions index 
// let age = [22, 55, 88, 77, 19]
// function agecheck(age) {
//     return age > 76
// }
// let result = age.findLastIndex(agecheck)
// console.log(result);


// The flat() method concatenates sub-array elements. removes adjacent not nested
// let age = [[22, [[55]], [[88,], [77]], [10],19],[]]
// console.log(age.flat(3));
// console.log(age.flat(3)) //removes only 3 brackets
// console.log(age.flat(Infinity)); //removes all the array brakets




// includes checks for specific elemnts 
// let fruits=["banana","apple","jack","dragon"]
// console.log(fruits.includes("10"));





// flatmap()
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);


// forEach() 


// array.from() accepts only string converts them to string 
// let students= 'abcdef'
// console.log(Array.from(students));



//indexOf and lastindexof finds index from 
// const myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.lastIndexOf(6)); //6
// console.log(myArr.indexOf(3)); //2


//isarray
// const myArr = "1, 2, 3, 4, 5, 6";
// console.log(Array.isArray(myArr));//false



//join method joins all elements pf an array into a string with optional seperator
// const colors=["red","black","green","blude"]
// const colorsrt=colors.join('💋')
// console.log(colorsrt);

// let name="Hello World!"
// console.log(name.length);

// const myArr = ["Hello World!"];
// console.log(myArr.length);


//push
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.push(55));
// console.log(myArr);


//pop
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.pop());

// console.log(myArr);



//shift removes 1 element from start
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.shift());
// console.log(myArr);


//unshift
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.unshift(1));
// console.log(myArr);

//sort
// let myArr = [1, 6, 3, 4, 5,6, 6];
// console.log(myArr.sort());
// console.log(myArr);




// let name=["juanid","anas","faraz","kishore"]
// console.log(name.re);

//sort onlu for atrings
// let name=["juanid","anas","faraz","kishore"]
// console.log(name.sort());


// const numb=[25,9,99,1000,100,0,65] //
// console.log(numb.sort((a,b)=>a-b));


// let names=["juanid","anas","faraz","kishore"]
// console.log(names.reverse);


// const numb=[25,9,99,1000,100,0,65] //
// for(let x=numb.length;x>=0;x--){
//     console.log(x);
// }
// console.log(numb.reverse());
