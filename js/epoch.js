//epoch time represents the number of millisec or sec in 



// there are 4 ways of instantiating creating date and tine
// let dae= new Date
// console.log(dae); //gives date and time inn utc

// let x= new Date(1676254115000) //gives datge and time from 1970 to till second
// console.log(x);

// let z=new Date("11 Feb 2022")
// console.log(z);


//let x=new Date(2023, 1, 11,11,20,23,20)
// console.log(x);


// converitng date in to millisends



// converting date any standard timezone
// let date=new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata",})
// console.log(date);


// let date=new Date().toLocaleString("en-US",{
// timeZone:"Asia/Kolkata",
// month:"numeric",
// day:"2-digit",
// year:"numeric",
// weekday:"long",
// hour:"2-digit",
// minute:"numeric",
// second:"2-digit"
// })
// // console.log(date);

// let date=new Date().toLocaleString("en-US",{
//     timeZone:"Asia/Kolkata",
//     month:"narrow",
//     day:"long",
//     year:"long",
//     weekday:"long",
//     hour:"long",
//     minute:"long",
//     second:"long"
//     })
//     console.log(date);
    

    // let date=new Date().toLocaleString("en-US",{
    //     timeZone:"Asia/Kolkata",
    //     month:"numeric",
    //     day:"2-digit",
    //     year:"numeric",
    //     weekday:"long",
    //     hour:"2-digit",
    //     minute:"numeric",
    //     second:"2-digit"
    //     })
    //     console.log(date);


    
function sum(a,b=5){
    return a+b
}
console.log(sum(5,8));
