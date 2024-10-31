// let age=20
// let status= age>18 ? 'major':"minor"
// console.log(status);

// let cfi_marks=81
// let status = cfi_marks>100 ? "pass":"fail"
// console.log(status);

// let x=20
// let y=15
// let z=10

// let greatest=x>y && x>z; y>x && y>z ; z>x && z>y ? 'x is greter':"y is greater" : "z is greater"; ------ correct form

let x = 20;
let y = 15;
let z = 10;

let greatest = (x > y && x > z) ? 'x is greatest' :(y > x && y > z) ? 'y is greatest' : 'z is greatest';
console.log(greatest);


