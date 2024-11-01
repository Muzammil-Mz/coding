// function birthday ()={                    //-----------------1st form
//     console.log("happy to you");
    
// }
// birthday()

// let birthday=()=>{                 // ------------- arrow func
//     console.log("happy to you");
    
// }
// birthday()

// function targets (array,target){            //normal
//     for (let x=0 ; x<array.length;x++) {
//         if (array[x]===target) {
//             return x
//         }
//     } return 555
// }
// let array=[1,2,3,5,5]
// let res=targets(array,5)
// console.log(res);

// let targets= function (array,target){            //exp
//     for (let x=0 ; x<array.length;x++) {
//         if (array[x]===target) {
//             return x
//         }
//     } return 555
// }
// let array=[1,2,3,5,5]
// let res=targets(array,5)
// console.log(res);

// let targets=  (array,target)=>{            //arrow functions
//     for (let x=0 ; x<array.length;x++) {
//         if (array[x]===target) {
//             return x
//         }
//     } return 555
// }
// let array=[1,2,3,5,5]
// let res=targets(array,5)
// console.log(res);

function fac(num) {
    let sum = 1;
    for (let i = num; i >= 1; i--) {  
      sum *= i;
    }
    console.log(sum);
  }
  fac(10);