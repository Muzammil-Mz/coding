// object destructuring is the process of destructuring the access of object key value by new es6 method intoruced inthe year of 2015
let students = {
    namee: "kishore",
    roll: 55,
    classs: "bds"
}

// console.log(students.class); //was the old pattern to access the values from obj 

//es6 has made new update 

// let {namee,roll,classs}=students //yes this stores all the values into students //object destructuring should always give the same key name 
//when asked console.log namee this gives output of namee instead of students.namee
//to change the key names we can change by the following megthod

let { namee: name22, roll: rolling, classs: classeee } = students
console.log(name22); //



