//array destrructure
//var is declared using const and assigning array of var to const when log arr1 arr2 arr3 automatically chosen
// const arr1=["arr1","arr2",]
// let [myvar1, myvar2, myvar3] =arr1
// console.log(myvar1);
// console.log(myvar2);
// console.log(myvar3);



//if arr2 wants to be choosed other than sequence add , , in the place
// const arr1=["arr1","arr2","arr222","arr44"] 
// let [myvar1, ,myvar2, myvar3] =arr1 //position 2 sequence has skipped to next
// console.log(myvar1);
// console.log(myvar2);
// console.log(myvar3);

// when printed log of value3 but only 2 present in const result is undefined

//can also slice elements from arrays in to new one
// const myarr=['arr1','arr2','arr3','arr4']
// let [a1,a2]=myarr
// let nerarr=myarr.slice(1)
// console.log(a1);
// console.log(a2);
// console.log(nerarr);


// can also be done by using spread operator a1 and a2 stored in arr1 and arr2 remain are stored in newarr

// const myarr=['arr1','arr2','arr3','arr4']
// let [a1,a2,...newarr]=myarr
// console.log(a1);
// console.log(a2);
// console.log(newarr);
