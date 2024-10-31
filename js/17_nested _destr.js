// //allows to access properties of obj present in array help of loop

// const users=[
//     {name:"kishore",age:22,class:"mbbs"},
//     {name:"junaid",age:23,class:"d pharm"},
//     {name:"samid",age:22,class:"it"}
// ]
// let [user1,user2,user3]=users //accessed from array in a sequence using destructure method user1 to kishore line 2 to junaid....
// console.log(user1);




// const users=[
//     {name:"kishore",age:22,class:"mbbs"},
//     {name:"junaid",age:23,class:"d pharm"},
//     {name:"samid",age:22,class:"it"}
// ]
// let [{name}, ,{age}]=users
// console.log(name);
// console.log(age); //accessed from obj present in array specific type

const users=[
    {name:"kishore",age:22,class:"mbbs"},
    {name:"junaid",age:23,class:"d pharm"},
    {name:"samid",age:22,class:"it"}
]
let [{name:namel}, ,{age:user2age}]=users
console.log(namel);
console.log(user2age);




// const users=[
//     {name:"kishore",age:22,class:"mbbs"},
//     {name:"junaid",age:23,class:"d pharm"},
//     {name:"samid",age:22,class:"it"}
// ]
// let [{name:namel}, ,{age}]=users //changed the key from name to namel
// console.log(namel);
// console.log(age);  