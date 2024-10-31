// Computed properties in JavaScript provide a powerful mechanism for dynamically assigning property names and

// values. By using square brackets with expressions, you can create more flexible and adaptable object structures. 
// Computed properties enhance code readability, maintainability, and reusability by handling dynamic scenarios with ease.

//NORMAL
// const obj = 'myobj1'
// const obj2 = 'myobj2'

// const val1 = "myval"
// const val2 = 'myval2'

// const object = {
//     obj: val1,
// obj2: val2
// }
// console.log(object);


//COMPUTED PROP
// const obj = 'myobj1'
// const obj2 = 'myobj2'

// const val1 = "myval"
// const val2 = 'myval2'

// const object = {
//     [obj]: val1,
//     [obj2]: val2
// }
// console.log(object);

const obje1="1obj"
const obje2="2obj"

const value1="val1"
const value2="val2"
const obj={
    [obje1]:value1,
    [obje2]:value2
}
console.log(obj);
