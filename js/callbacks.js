// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// function sum(a,b){
//     console.log(a+b);
    
// }

// function calculator(a,b,sum){
//     sum(a,b)
// }

// calculator(1,2,sum)









// // Step 1: Prepare Ingredients
// function prepareIngredients(nextStep) {
//     console.log("Step 1: Preparing ingredients... 🥕🍅");
//     console.log("Chopping vegetables, cleaning meat, and washing rice. 🍖🍚");
//     nextStep(); // Proceed to Cook Rice
// }

// // Step 2: Cook Rice
// function cookRice(nextStep) {
//     console.log("Step 2: Cooking rice... 🍚🔥");
//     console.log("Boiling water and cooking rice to perfection. 😋");
//     nextStep(); // Proceed to Add Spices and Meat
// }

// // Step 3: Add Spices and Meat
// function addSpicesAndMeat(nextStep) {
//     console.log("Step 3: Adding spices and meat... 🌶️🍖");
//     console.log("Mixing everything together and letting it cook. 🍲");
//     nextStep(); // Proceed to Serve the Biryani
// }

// // Step 4: Serve the Biryani
// function serveBiryani() {
//     console.log("Step 4: Serving the biryani... 🍽️🍛");
//     console.log("Biryani is ready! Everyone is enjoying the feast! 🎉");
// }

// // Execute the steps sequentially
// prepareIngredients(function () {
//     cookRice(function () {
//         addSpicesAndMeat(function () {
//             serveBiryani();
//         });
//     });
// });

// Callback Structure: Each function takes a callback (nextStep) to execute the subsequent step.
// This ensures that the steps execute in the desired sequence.
// Code 

// Readability:Nesting callbacks can make the code harder to read, especially for longer processes


//optimised verion of this code

// Step 1: Prepare Ingredients
// let prepareIngredients=(nextStep)=> {
//     console.log("Step 1: Preparing ingredients... 🥕🍅");
//     console.log("Chopping vegetables, cleaning meat, and washing rice. 🍖🍚");
//     nextStep(); // Proceed to Cook Rice
// }

// // Step 2: Cook Rice
// let cookRice=(nextStep)=> {
//     console.log("Step 2: Cooking rice... 🍚🔥");
//     console.log("Boiling water and cooking rice to perfection. 😋");
//     nextStep(); // Proceed to Add Spices and Meat
// }

// // Step 3: Add Spices and Meat
// let addSpicesAndMeat=(nextStep)=> {
//     console.log("Step 3: Adding spices and meat... 🌶️🍖");
//     console.log("Mixing everything together and letting it cook. 🍲");
//     nextStep(); // Proceed to Serve the Biryani
// }

// // Step 4: Serve the Biryani
// let serveBiryani=() =>{
//     console.log("Step 4: Serving the biryani... 🍽️🍛");
//     console.log("Biryani is ready! Everyone is enjoying the feast! 🎉");
// }

// // Execute the steps sequentially
// prepareIngredients(()=> {
//     cookRice(()=> {
//         addSpicesAndMeat(()=> {
//             serveBiryani();
//         });
//     });
// });






// let time=setTimeout(() => {
//     console.log("hello");
    
// }, 3000);













// function brush(next){
//     console.log("brush your teeth");
// console.log("brush for shiny tetht");
//     next()
// }


// function breakfast(next){
//     console.log("Breakfast is preparing");
//     console.log("breakfst prepared");
//     next()
    
// }

// function lunch(){
//     console.log("yes im good");
//     console.log("im okay");
    
    
// }
// brush(function (){
//     breakfast(function (){
//         lunch(function(){

//         })

//     })
// })


// function wakeup(next){
//     console.log("wakeup now");
//     console.log("get ready now");
    
//     next()
// }

// function travel(next){
//     console.log("yes travel now");
//     console.log("yes by bus");
    
//     next()
// }

//same function calling inside same function caleed recursion
// one function calling another function as parameter is callback
// bunch of call backs become callbackk hell


// function prepare(start){
//     console.log("wash rice");
//     console.log('prepare ingredietns');
    
//  start()   
// }


// function boil (start){
//     console.log("boil the rice");
//     console.log("boil more");
    
    
// }

// function mix(start){
//     console.log("add spoces");
//     console.log("add rice");
    
//     start()
// }



// function final (){
//     console.log("bring plates");
// console.log("yes bring");


    
// }

// prepare(()=>{
//     boil (()=>{
//         mix(()=>{
//             final(()=>{

//             })

//         })


//     })
// })


// let voc=(a,b)=>{
//     return a+b
// }
// console.log();
