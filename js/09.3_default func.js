//default parametres
// function add(a,b) { // noraml code
// if (typeof b==="undefined"){
//     b=0
// } 
// return a+b   
// }
// console.log(add(2));


// function add(a,b=0) { // noraml code
// return a+b   
// }
// console.log(add(2));



//rest parametres
// function add(a,b, ...c){
//     console.log(a);
//     console.log(b);
//     console.log(c); 
//     }
// add(1,2,3,4,8,)

//optimised verison of above
// function addall (...numbers){

//     let total=0  
//     for (let number of numbers){
//     total=total+number
//   }return total
// }
// console.log (addall(4,8,8,4))

// function addall(...numbers){
//     let total=0
//     for (let number of numbers){
//         total=total+number
//     } return total
// }
// console.log(addall(5,8,4,9));

//param destructuring
const person = {
    name: "kihore",
    cld: "mbbs"
}

// console.log(data);

function printdetails({ name, cld}) {
    console.log(name);
    console.log(cld);


} 
printdetails(person )

