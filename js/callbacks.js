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


function prepare(start){
    console.log("wash rice");
    console.log('prepare ingredietns');
    
 start()   
}


function boil (start){
    console.log("boil the rice");
    console.log("boil more");
    
    
}

function mix(start){
    console.log("add spoces");
    console.log("add rice");
    
    start()
}



function final (){
    console.log("bring plates");
console.log("yes bring");


    
}

prepare(()=>{
    boil (()=>{
        mix(()=>{
            final(()=>{

            })

        })


    })
})


// let voc=(a,b)=>{
//     return a+b
// }
// console.log();
