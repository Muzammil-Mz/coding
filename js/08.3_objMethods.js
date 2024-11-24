// Object methods:
// 1. Object.keys(obj):

// let person = {
//     fname: "syed",
//     age: 20,
//     isAlive: true
// }
// console.log(Object.keys(person)); //[ 'fname', 'age', 'isAlive' ]
// it returns an array of keys (property names) in the object

// 2. Object.values(obj): //[ 'syed', 20, true ]
//  it returns an array of values in the object
// console.log(Object.values(person));

// 3. Object.entries(objectname):
// returns an array of object
// console.log(Object.entries(person)); //[ [ 'fname', 'syed' ], [ 'age', 20 ], [ 'isAlive', true ] ]

// 4. Object.assign(objname):
// this returns an object which clones/merges one object into another.
// let obj1 = {
//     a: 21,
//     b: 22
// }

// let obj2 = {
//     c: 23
// }
// console.log(Object.assign(obj2,obj1));
// let totalObj = Object.assign(obj1,obj2)
// console.log(totalObj); //{ c: 23, a: 21, b: 22 }


// 5. Object.create(objname)
// it is a method which allows us to create a new object with a specified prototype object 

// let actor = {
//     name: "SALMAN KHAN",
//     age: 57,
// }
// let hero = Object.create(actor);
// console.log(hero.name, hero.age); //SALMAN KHAN 57


// 6. Object.freeze(objname)
// in js object.freeze will freeze your key, value pair or whole object 

// let mall = {
//     area: "Central",
//     city: "Hyderabad"
// }
// mall.city = "bengaluru"; //update value of city
// Object.freeze(mall) 
// mall.area = "forward" //tried to update but failed
// console.log(mall); //{ area: 'Central', city: 'bengaluru' }

//  7. Object.fromentries()
// it takes an input from an array
// let ab = [["ab", "49"], ["ece","yy"] ];
// console.log(Object.fromEntries(ab)); //{ ab: '49', ece: 'yy' }


// 8. Object.is(objname)
// in js Object.is checks if two values are same values or not just like (===)
// let a = "10";
// let b = "10";
// console.log(Object.is(a,b)); //true

// 9. isFrozen(objname):
// to check if the object is freeze or not
// let student = {
//     name: "rahman",
//     age: 20
// }

// Object.freeze(student);
// student.city = "hyderabad";//new kv tried to add
// console.log(student);//{ name: 'rahman', age: 20 }
// console.log(Object.isFrozen(student));//true

// 10. Object.toString()
// toString() converts the number into binary, octal and hexa values only
// let number = 64;
// let check = number.toString(16);
// console.log(check); //40

// function conversion(number, convert){
//     return console.log(number.toString(convert));
// }
// conversion(12, 2);//1100

// 11. Objext.seal(objname):
// in js, you can update the key, value pairs in object using Object.seal but can't update 
// any changes to trhe object
// let hello = {
//     fname : "hey",
//     age:30
// }

// Object.seal(hello);
// hello.fname = "yooo"; //updated
// hello.isAlive = true;
// console.log(hello);

// Objetct.isSealed(objname):
// it checks if your object is sealed or not
// console.log(Object.isSealed(hello));//true

