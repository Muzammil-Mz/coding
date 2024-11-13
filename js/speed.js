let numb=[10,20,30,40,50]
let start=performance.now()
numb.forEach((x)=>console.log(x**2));
let end=performance.now()
let total=end-start
console.log(total);

// let numb=[10,20,30,40,50]
// let start=performance.now()
// numb.map((x)=>console.log(x ** 2));
// let end=performance.now()
// let total=end-start
// console.log(total);

