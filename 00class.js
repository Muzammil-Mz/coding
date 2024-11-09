// let students={
//     name:"kishore",
//     class:"mbbs",
//     area:"abc"
// }


// Object.seal (students)
// students.class="bds";
// console.log(students);
// console.log(Object.isSealed(students))


let students={
    name:"kishore",
    class:"mbbs",
    area:"abc"
}


Object.seal (students)
students.freeze
console.log(students);
console.log(Object.isSealed(students))
