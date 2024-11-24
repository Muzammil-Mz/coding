//this worked 

// let checkstock = (product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (product == "laptop") {
//                 resolve("product is available yes")
//             } else {
//                 reject("product not avaialbe")
//             }
//         }, 2000);
//     })
// }

// let blackcolor = ((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const black = true
//             if (black) {
//                 resolve("yes its black")
//             } reject("sorry its not black")
//         }, 2000);
//     })
// })


// let config = ((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const i5 = true
//             if (i5) {
//                 resolve("yes its i5")
//             }
//             reject("sorry no such config")
//         }, 2000);
//     })
// })


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

//this was the second method that is using promises to call the function
//now usong async await



// let checkstock = (product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (product == "laptop") {
//                 resolve("product is available yes")
//             } else {
//                 reject("product not avaialbe")
//             }
//         }, 2000);
//     })
// }

// let blackcolor = ((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const black = true
//             if (black) {
//                 resolve("yes its black")
//             } reject("sorry its not black")
//         }, 2000);
//     })
// })


// let config = ((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const i5 = true
//             if (i5) {
//                 resolve("yes its i5")
//             }
//             reject("sorry no such config")
//         }, 2000);
//     })
// })



// async function finalcheck(product) {
//     try {
//         const stock = await checkstock(product)
//         console.log("success", stock);


//         const colorconf = await blackcolor(product)
//         console.log("success", colorconf);


//         const configmessage = await config(product)
//         console.log("suce555ess", configmessage);

    
// }catch (error) {
//     console.log('error', error);
//     }
// }
// finalcheck("laptop")