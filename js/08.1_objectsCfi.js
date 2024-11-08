// let students={
//     name:"kishrep",
//     class:"bds",
//     age:35
// }

// students.name="raju" //changes value 
// console.log(students);

// let students={
//     name:"kishrep",
//     class:"bds",
//     age:35
// }

// students.key()
// console.log(students);



//object.keys(object name) gives keys of object in array form
//object,values(object name) gives values of object in array form
// let students={
//     name:"kishrep",
//     class:"bds",
//     age:35
// }

// console.log(Object.keys(students));
// console.log(Object.keys(students));
// console.log(Object.keys(students));

// console.log(Object.keys(students));
// console.log(Object.values(students));


//object.entries(obj name) shows entries in array form
// let students={
//     name:"kishrep",
//     class:"bds",
//     age:35
// }
// console.log(Object.entries(students));

//object.assign(objname1,objname2) this copies the key vales from source to destination i.e students-destination teacher-source simply appends
// let students={
//     name:"kishrep",
//     class:"bds",
//     age:35
// }

// let teachers={
//     surname:"raj",
//     division:"bio",
//     salary:50
// }
// console.log(Object.assign(teachers,students));



// let obj1 = {
//     a : "something",
//     b : 1234567
// }

// let obj2 = {
//     c : "anything"
// }
// console.log(Object.assign(obj1,obj2));
// console.log(Object.assign(obj2,obj1));


// console.log(Object.assign(students,teachers));
// console.log(Object.assign(teachers,students));


// -----------------------------
//object methods
//Common Built-in Object Methods
//JavaScript provides sevel built in object methods, available through the global object 

//1. Object.keys(obj)
// returns an array of keys (property name) in the object.
// let person ={
//     fName : "mohammed ismail",
//     age : 21,
//     isAlive : true
// }
//console.log(Object.keys(person));
// it will show the leftsided keys



//2. Object.values(objName)
//returns an array of values in the object
// let person1 ={
//     fName : "mohammed ismail",
//     age : 21,
//     isAlive : true
// }

//console.log(Object.values(person));
// it will show the rightsided keys

//3. Object.entries(objName)

// let person2 ={
//     fName : "mohammed ismail",
//     age : 21,
//     isAlive : true
// }
//console.log(Object.entries(person));

//4. Object.assign(objName)
//returns an object which clones the object. the second Obj will assigned(moved) into first obj
// let obj1 = {
//     a : "something",
//     b : 1234567
// }

// let obj2 = {
//     c : "anything"
// }


// console.log(Object.assign(obj1,obj2));
// console.log(Object.assign(obj2,obj1));


//5.Object.create(objName)
//object.create is a method which allows you to create the new object with a specified prototype object and optional 
//additional properties. this is particularly useful whrn you want to establish prototype- based inheritance, allowing
// one object to inherit properties and methods from another

// let actor = {
//     name : "shah rukh khan",
//     age : 58,

// }

// let hero = Object.create(actor); 
// console.log(hero.name)

//6.Object.freeze(objName)
//In JavaScript, Object.freeze will freeze ur key value pair or whole object

// let mall = {
//     area : "central",
//     city : "hyderabad"
// }

// Object.freeze(mall)
// mall.city = "mumbai"                // these values are not getting add delete or edited because the first values are freezed neither it can chng nor deleted
// mall.zip = 500045,
// delete mall.area

// console.log(mall)


//7. Object.is
// In JavaScript, object.is checks if 2 values are teh same values are not

// let a =10;
// let b = 10;
// console.log(Object.is(a,b));             //it compares the first value with second value if it is same then it is true, if it is not same then it will be false


//8. Object.isFrozen(objName)

// let person3 = {
//     name: "Ismail",
//     age : 23
// }

// console.log(Object.freeze(person3));               
// console.log(Object.isFrozen(person3));          //it shows in true or false. if the object is freezed it will show as true and if the object is unfreezed then it will show as false


//9.Object.toString()

// let number = 10;
// let check = number.toString(2);
// console.log(check);

// let number1 = 64;
// let check1 = number1.toString(16)
// console.log(check1)



//10. Object.seal
// In JavaScript,Object.seal using seal you can update the key value pairs which is existing but it will not allow add or delete

// let hello = {
//     fName : "hello",
//     age : 21
// }

// Object.seal(hello)
// hello.fName = "bye"

// console.log(Object.isSealed(hello))

// hello.isAlive = true ; //it is not added bcz it is not a existing value in seal we can't add or delete the new values

// console.log(hello);

// let students = ["orgName" , "apple"]
// console.log(Object.fromEntries(students))