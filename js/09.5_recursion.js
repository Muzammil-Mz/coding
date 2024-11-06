//recursion is a process in which a function callas itself directly or indirectly in order to solve a problem by breaking 
// it down in to samaller syb problems this repeated self calling continues until it reaches a base case whuch us a condtion where 
// no futther recursion is needed allowing the functio to start returning values back up each call.a
// Simply recurison is defined or done in terms of itself until it reaches a stopping point

function test(){
    console.log("hello");
    test()
}
test()