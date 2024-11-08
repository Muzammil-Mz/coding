
// arrays pop
// let fruits=["apple","ball","cat","doll"]
// console.log(fruits.pop());
// console.log(fruits);


//arrays 
//unshift  adds elelment in start of array
// let fruits=["apple","ball","cat","doll"]
// fruits.unshift("doll")
// console.log(fruits)


//shift - removes from starting of array
// let fruits=["apple","ball","cat","doll"]
// fruits.shift()
// console.log(fruits)

// push pop is faster than shift and unshift/

//primitive type when update in y with that of x has no reflection
// whereas reference type has reflection in arrays due to reference taking from x to y/
// x =5
// y=x ------ y is 5 here
// when incremented x++ x is 6 and y is 5 itself

// in arrays 
// array1=[1,,6,6,6,9,]
// array2=array1
// array1.push(3) -------- array and array2 both gets changed due to reference 

// arrays are cloned by using x=5 y=x
// to check x===y

// spread operator is used to clone arrays
// let array1 =[1,2]
// let array2=[...array1]
// console.log(array1,array2);
// array1.push(3)
// console.log(array1,array2);

// if willing to add elements only 2 after cloning from1
// let array1=[1,2,3]
// let array2=[...array1,4,5,6]
// console.log(array1,array2);


// The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates 
// over values that the iterable object defines to be iterated over
// let fruit=['aple','ball','cat','doll']
// let y=[]
// for (let x of fruit){
//    y.push(x.toUpperCase());
// }
// console.log(y);
// console.log(fruit);


// let fruit={apple:"ball", cat:"doll"}
// let y=[]
// for (let x in fruit){
  
//    y.push(x.toUpperCase());
// }
// console.log(y);
// console.log(fruit);


// CRUDL create read update delete 

// let fruit=["apple","ball","cat",null,undefined,55,{fname:"suhail",age:10},[55,88]]

// fruit [9]=["suhail"]
// fruit[9]=[88]
// fruit[55]=['ddddd']
// console.log(fruit);



//to delte item in array
// let fruit=["apple","ball","cat",null,undefined,55,{fname:"suhail",age:10},[55,88]]
// delete fruit[2]
// console.log(fruit.length);



