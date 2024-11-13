/* the map methd is used to trasnsorm each element in a n array and returns a new array with the transformed ekentbs uts ysefyk when you awawnt to apply a function to each elemtnt and store 
result in new array*/


// let numb=[1,2,3,4,5]
// let double=numb.map((x=>x*2))
// console.log(double);


let numb=[1,2,3,4,5]
// console.log(numb.forEach((x)=>x*x)) //undefined due to numb.foreach
console.log(numb.map((x)=>x*x).filter ((x)=>x>9))
