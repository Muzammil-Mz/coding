//the slice returns a shallow copy of a portion of an arrat in to array it doesnt modify the original array. this is useful when you want to extract 
// a section of an array without altering the original array.

// let number=[1,2,3,4,5,6]
// let mynewarr=number.slice(0,3)
// console.log(mynewarr); //1,2,3


// let number=[1,2,3,4,5,6]
// let mynewarr=number.slice(2,3)
// console.log(mynewarr); //3


// let number=[1,2,3,4,5,6]
// let mynewarr=number.slice(2)
// console.log(mynewarr); //3,4,5,6


// let number=[1,2,3,4,5,6]
// let mynewarr=number.slice(2,5)
// console.log(mynewarr); //3,4,5

// let number=[1,2,3,4,5,6]
// let mynewarr=number.slice(0,-2) //prints for 0 to 4 index
// console.log(mynewarr);



// let number=[1,2,3,4,5,6]
// let mynewarr=number.slice(0) //prints all numbers
// console.log(mynewarr);



//splice method changes the content of array by removing replaing or adding eleents
// let number=[1,2,3,4,5,6]
// let mynewarr=number.splice(0,3)
// console.log(mynewarr);//1,2,3



// let number=[1,2,3,4,5,6]
// let mynewarr=number.splice(3,2)
// console.log(mynewarr);//4,5

// let number=[1,2,3,4,5,6]
// //          0 1 2 3 4 5
// let mynewarr=number.splice(1,2) //(1 is index from arr, 2 is 2 elemtns to br removed)
// console.log(mynewarr);

// let number=[1,2,3,4,5,6]
// //          0 1 2 3 4 5
// let mynewarr=number.splice(1,2) //(1 is index from arr, 2 is 2 elemtns to br removed)
// console.log(mynewarr);
