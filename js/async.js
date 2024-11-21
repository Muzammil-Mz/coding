
function checkstock(product){
    return new Promise ((resolve,reject)=>{
        console.log("checking stock for",product);
        setTimeout(()=>{
            if (product==="laptop"){
                resolve(`${product}is available`);
                
            }else {
                reject(`${product}is no available`)
            }
        },2000)
        
    })
} 

function warehouse(product){
    return new Promise((resolve,reject)=>{
        console.log("checking in warehouse");
        
        setTimeout(() => {
            const warehouseavilable=true
            if(warehouseavilable){
                resolve(`${product} available in warehouse`)
            } else{
                reject(`${product}not avaialble in warehouse`)
            }
            
        }, 2000);
    })
}


function checkavailability(product){
    return new Promise((resolve,reject)=>{
        console.log("checking for availabilty at local store");
      
        setTimeout(() => {
            let locallyavailable=true
            if(locallyavailable){
                resolve(`${product} locally avaiklabl`)
            } else{
                reject(`${product}not available`)
            }
        }, 2000);


    })
}


// checkstock("laptop")
// .then((message1)=>{
//     console.log("success",message1);
//     return warehouse("laptop")
// })
// .then ((message2)=>{
//     console.log("success",message2);
//     return checkavailability("laptop")
// })
// .then((message3)=>{
//     console.log("suceess",message3);
//     console.log("process completed");
    
// })

// .catch((error)=>{
//     console.log("error",error);
    
// })


async function laptopavailability(product) {
    try{
let message1=await checkstock(product)
console.log(message1);
let message2=await warehouse(product)
console.log(message2);
let message3 =await checkavailability (product) 
console.log(message3);
    }catch(error) {
        console.log("error",error);
        
    }
}
laptopavailability("laptop")
