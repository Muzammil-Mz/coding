// const students={
//     name:"kishore",
//     class:"mbbs"
// }
// // console.log(students);

// function personal(obj){
// console.log(obj.name);

// }
// personal(students)

// this above exapmple we created a object named students and we created a function named peresonal details
// tried to destructure students object by giving a name to the function and logiing with function name.key of object
// finally called function with function name and object name

// let student={
//     name:"kishore",
//     class:"12"
// }

// function data(personal){
// console.log(personal.name);
// console.log(personal.class);


// }
// data(student)    //clear till here 


// let student={
//     name:"kishore",
//     class:"12"
// }

// function data(personal){
// console.log(personal.name);
// console.log(personal.class);


// }
// data(student)    //clear till here 

let student={
    name:"kishore",
    clas:"12"
}

function data({name,clas}){ //added as parametres of obj student here  and logged directly by calling student as argument 
console.log(name);
console.log(clas);


}
data(student)  
