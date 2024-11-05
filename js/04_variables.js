//variables are containers that store values in it

// variables are case sensitive 
// only letters digits and dollar sign allowed no space allowed
// eg: full name 123 full_name ----> bad practice full_name or full$name

//resered words cant be used for variables
//starting with $ underscore or name is used 

// camelCase
//snake_case
//Pascal_Case

// let var and const
// let name ="kishore"
// console.log(name);


// var is used to redeclare and reassign is accepted
// var age =24
// var age =29
// var age =56
// console.log(age);

// whereas same scene with let... let cannot be redeclared and can be updated
// let age=24
// let age=29
// let age=55
// console.log(age);

// const is used to assign values that cant be changed and are fixed
// cosnt cant be redeclared or updated+
// while using with scoping in var
// var value=10
// {
//     var value=20
//     console.log(value); //var takes last updated value here 20
    
// }
// console.log(value);

//similaly with let 
// let value=10
// {
//     let value=20
//     console.log(value); //20 is accessed betwn brackets
    
// }
// console.log(value);


// let and const are block scope ie they can be acceess only in block ode={
//     whereas var is functional scop
// }