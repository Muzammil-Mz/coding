//object spreader in obj 
// normal
// let obj1={
//     name:"kishore",
//     class:"mbbs"
// }
// let obj2={
//     name:'junaid',
//     class:"d"
// }
// console.log(obj1,obj2);



let obj1={
    name:"kishore",
    class:"mbbs"
}
let obj2={
    name:'junaid',
    class:"d"
}
let obj3={...obj2,...obj1}
console.log(obj3);

