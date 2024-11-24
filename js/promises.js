// /* In js promises are a powerful way to handle asynchronous p[erations. they represent a value that may be avaialable npw, or in the future
// or never. promises help manage asychronous code more effcietnly than traditional call backs avoiding call back helll

// how it works
// a promise is an objct with 3 reop
// 1.pending: the operation is ongoing and has not completed
// 2. fulfilled: operation completed successfully and the promise has a value
// 3. rejected the opertaionfailed and the promise 

// */


// // function evenodd(number){
// //     return new Promise((resolve, reject) => {
// //         if (number%2===0){
// //             resolve (`${number} is even! `)
// //         } else {
// //             reject (`${number}is odd`)
// //         }
// //     })
// // }


// // checkEvenOdd(8)
// // .then((message)=>{
// //     console.log("success",message);  
// // })
// // .catch(())


// // function verifyAge(age) {
// //     return new Promise((resolve, reject) => {
// //         if (age >= 18) {
// //             resolve("you are eligible for vore")
// //         } else {
// //             reject("you are not eligible to vote")
// //         }

// //     });
// // }

// // verifyAge(20)
// //     .then((message) => console.log("success", message))
// //     .catch ((error) => console.error("error", error));



// // function checkstock(product){
// //     return new Promise((resolve, reject)=>{
// //         console.log(`Checking for ${product}...`);
// //         setTimeout(()=>{
// //             if (product==="Laptop"){
// //                 resolve (`${product} is avalilable`)
// //             } else {
// //                 reject (`${product} is not available `)
// //             }
// //         })

// //     })
// // }




// function checkstock(product){
//     return new Promise ((resolve, reject)=>{
//         console.log(`checking for ${product}`);
//         setTimeout(()=>{
//             if (product=="laptop"){
//                 resolve (`${product} is avalialble`)
//             }
//             else {
//                 reject(`${product} is not availabele`);

//             }
//         },1000)
//     })
// }

// function checkwarehouse(product){
// return new Promise ((reject,resolve)=>{
//     console.log(`checking for ${product} in warhouse`);
//     setTimeout (()=>{
//     const warehouseavaialble=true
//     if (warehouseavaialble){
//         resolve (`${prduct} is availabel in warehouse`)
//     } else{
//         reject (`${product} is not available`)
//     }
//     },1000)
// })
// }



// function checkacvailable(){
// return new Promise((resolve,reject)=>{
//     console.log(`checking for ${product} in store`);
//     setTimeout(() => {
//         const locallyavailable=ture
//         if (locallyavailable){
//             resolve(`${product} available locally`);

//         } else{
//             reject (`${product} not avaiable`)
//         }
//     }, 2000);
// })
// }


// function shiptostore(product){
//     return new Promise((resolve,reject)=>{
//         console.log(`${product} checking in warehouse` );
//     setTimeout(() => {
//      const warehouseavaialble=true
//      if(warehouseavaialble){
//         return (`${product} is available in warehouse`)
//      }else {
//         reject (`${product} not avaialble in warehouse`)
//      }   
//     }, 2000);    
//     })
// }


// checkstock("laptop")
// .then((message)=>{
//     console.log("success",message);
//     return checkWarehouse("laptop")
// })
// .thn ((message)=>{
//     console.log("success",message);
//     return chceck 

// })




//successs
// let evenodd=(num)=>{
//     return new Promise ((resolve,reject)=>{
//       if (num%2==y){
//         resolve ("its even")
//       } else {
//         reject ("its odd")
//       }  
//     },2000)
// }

// evenodd()
// .then((message)=>{
//   console.log("success",message);

// })
// .catch((error)=>{
// console.log("error",error.message ,error.name);

// })


let checkstock = (product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product == "laptop") {
                resolve("product is available yes")
            } else {
                reject("product not avaialbe")
            }
        }, 2000);
    })
}

let blackcolor = ((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const black = true
            if (black) {
                resolve("yes its black")
            } reject("sorry its not black")
        }, 2000);
    })
})


let config = ((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const i5 = true
            if (i5) {
                resolve("yes its i5")
            }
            reject("sorry no such config")
        }, 2000);
    })
})


// checkstock("laptop")
// .then((message)=>{
// console.log("sucess",message);


// return blackcolor ("laptop")
// })
// .then ((message)=>{
//     console.log("success",message);
//     return config ("laptop")
// })
// .then((message)=>{
//     console.log("success",message);

// })

// .catch((error)=>{
// console.log(error,"error");

// })


//now usong async await

async function finalcheck(product) {
    try {
        const stock = await checkstock(product)
        console.log("success", stock);


        const colorconf = await blackcolor(product)
        console.log("success", colorconf);


        const configmessage = await config(product)
        console.log("suce555ess", configmessage);

    
}catch (error) {
    console.log('error', error);
    }
}
finalcheck("laptop")