// 1. Check Even or Odd: Write a program that checks if a given number is even or odd.
// let x=5
// if(x%2==0){
//     console.log("even");

// } else {
//     console.log("odd");

// }



// 2. Grade Checker: Take an integer input (0-100) and categorize it into grades:
// - 90-100: A
// - 80-89: B
// - 70-79: C
// - Below 70: Fail

// let mark=95
// if(mark>=90 && mark<=100){
//     console.log("A");

// } else if(mark>=80 && mark<=89){
//     console.log("B");

// } else if(mark>=70 && mark<=79 ){
//     console.log("C");

// } else {
//     console.log("fail");

// }

// 3. Number Comparison: Take two numbers as input and display the larger of the two

// let number1=88
// let number2=55
// if(number1>number2){
//     console.log(number1, " is greater");

// } else {
//     console.log(number2," is greater");

// }

// 4. Eligibility for Voting: Write a program that checks if a user is eligible to vote (18 or older).
// let age=5
// let eligible= (age>=18) ? "can vote":"sorry"
// console.log(eligible);


// 5. Positive, Negative, or Zero: Check if a number is positive, negative, or zero.
// let number=0
// if(number>0){
//     console.log(number," is positive");

// } else if (number===0){
//     console.log("its zero");

// } else{
//     console.log(number," is negative");

// }




// 6. Leap Year Checker: Write a program to determine if a given year is a leap year.
// let year=2023
// if (year%4==0){
//     console.log(year, "is leap year");


// } else{
//     console.log("not a leap year");

// }




// 7. Grade Category: Ask the user for their percentage and categorize as Excellent, Good, Average,  or Poor based on defined ranges.
// let percentage=55
// let grade=percentage/10
// if (grade>=9.0&& grade<=10.0){
//     console.log("excellent");

// } else if(grade>=8.0&&grade<=8.9){
//     console.log("good");

// } else if (grade>=7.0 && grade<=7.9){
//     console.log("average");

// } else{
//     console.log("you should work hard ");

// }


// 8. Sign-In Validator: Simulate a sign-in function that checks if a username and password match predefined values.
// let username="user1"
// let password="user1@123"
// let validuser="user1"
// let validpassword="user1@123"
// if(username==validuser && password==validpassword){
//     console.log("success");

// }else{
//     console.log("sorry");

// }


// let username="usdfdfer1"
// let password="user1@123"
// let validuser=username
// let validpassword=password
// if(username==validuser && password==validpassword){
//     console.log("success");

// }else{
//     console.log("sorry");

// }

// 9. Discount Calculator: Calculate the discount for a purchase amount:
// - Above $1000: 10%
// - $500-$1000: 5%
// - Below $500: No discount
// let price=50000
// // let finalbill=price/10
// if(price>1000){
//     console.log("you avail discount of 10% your final bill",price/10)
// } else if(price>=500 && price<=1000){
//     console.log("you avail discount of 5%",price/5);

// } else{
//     console.log("sorry no discount final bill",price);

// }


// 10. Temperature Check: Write a program to print messages based on the temperature input (hot,
// warm, cold).

// let t=50
// if(t>=0 && t<=20){
//     console.log("cold");

// } else if (t>=21 && t<=30){
//     console.log("warm");

// } else {
//     console.log("hot");

// }


//----------------------------------------------------------------------------------------------------------------
//loops problems


// 1. Print Numbers 1 to 10: Use a for loop to print numbers from 1 to 10.
// for (let x=1;x<=10;x++){
//     console.log(x);

// }

// 2. Sum of N Natural Numbers: Calculate the sum of the first N natural numbers using a loop.
// let total=0
// for(let x=1;x<=10;x++){
//     total=total+x
//     console.log(total);

// }

// 4. Multiplication Table: Print the multiplication table for any given number.
// let y=5
// for(let x=1;x<=10;x++){
//     console.log(`${y}x${x}=${y*x}`);

// }

// 5. Print Even Numbers: Print all even numbers from 1 to N.

// for (let x=1;x<=10;x++){
//     if (x%2==0){
//         console.log(x,"even");

//     }

// }

// 6.rev order print
// for (let x=10;x>=1;x--){
//         console.log(x);

//     }

//7.prime numb
// let limit = 20;

// for (let num = 2; num <= limit; num++) {
//     let isPrime = true;

   
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break; 
//         }
//     }

//     if (isPrime) {
//         console.log(num);
//     }
// }

//     }
// }

// 8. Fibonacci Sequence: Print the first N numbers in the Fibonacci sequence.
// let N = 10; 

// let a = 0, b = 1;
// console.log(a); 
// console.log(b); 

// for (let i = 3; i <= N; i++) {
//     let next = a + b; 
//     console.log(next);


// }




// 9. Sum of Digits: Calculate the sum of the digits of a given number.
// let number = 12345;
// let sum = 0;

// while (number > 0) {
//     let digit = number % 10; 
//     sum += digit; 
//     number = Math.floor(number / 10); 
// }

// console.log("Sum of digits:", sum);


// 10. Guessing Game: Create a simple guessing game where the user has to guess a randomly generated number.
// let targetNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// function guessNumber(userGuess) {
//     attempts++;
//     if (userGuess === targetNumber) {
//         console.log(`Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`);
//     } else if (userGuess > targetNumber) {
//         console.log("Too high! Try again.");
//     } else {
//         console.log("Too low! Try again.");
//     }
// }


// guessNumber(50)

// let guess=33
// let originalNumb=10
// if(guess=originalNumb){
//     console.log("its correct");

// } else {
//     console.log("you are close try again");

// }




// 3. Nested If-Else with Loops and Functions Practice Problems
// 1. Number Range Validator: Write a function that checks if a number is within a specified range (min
// and max), and keep asking the user until a valid number is entered.

// let min = 10;
// let max = 20;
// let userNumber = 25;
// function validateNumb(min, max, userNumber) {
//     while (userNumber < min || userNumber > max) {
//         console.log(`Invalid number: ${userNumber}. Please enter a number between ${min} and ${max}.`);
//         userNumber = min + Math.floor(Math.random() * (max - min + 1));
//     }

//     console.log(`Valid number entered: ${userNumber}`);
// }


// validateNum(min, max, userNumber)
// 2. Number Guessing with Hints: Implement a number guessing game with hints ("higher" or "lower").


// let number=55
// let enterednumb=2
// if(numb==enterednumb)
// else {
//     console.log("you are rigth");
//     }



// 3. Grading System: Write a function that takes a list of student scores and categorizes each into
// grades A, B, C, or F.
// let marks = 1
// if (marks >= 60 ){
//     if (marks>=60&& marks<70){
//         console.log("D");
        
//     }else if (marks>=80 && marks<90){
//         console.log("C");
        
//     } else if(marks>=90&& marks<=100){
//         console.log("B");
        
//     } 
// }
// else {
//     console.log("fail");

// }



// 4. Password Validator: Write a function that repeatedly asks the user for a password and checks its
// strength (e.g., if it contains numbers and special characters).
// function validatePassword() {
//     const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
//     const numbers = /[0-9]/;

//     let password = "";
//     let isValid = false;

//     while (!isValid) {
//         password = prompt("Enter a strong password (must contain at least one number and one special character):");

//         if (password.length >= 8 && specialCharacters.test(password) && numbers.test(password)) {
//             isValid = true;
//             console.log("Password is strong.");
//         } else {
//             console.log("Password must be at least 8 characters long and contain at least one number and one special character.");
//         }
//     }
// }

// validatePassword();


// 5. Divisibility Checker: Write a function that checks if numbers in a list are divisible by 3 or 5 and
// categorizes them accordingly.
// function divisibilityChecker(numbers) {
//     const divisibleBy3 = [];
//     const divisibleBy5 = [];
//     const divisibleByBoth = [];
//     const notDivisible = [];

//     for (let number of numbers) {
//         if (number % 3 === 0 && number % 5 === 0) {
//             divisibleByBoth.push(number);
//         } else if (number % 3 === 0) {
//             divisibleBy3.push(number);
//         } else if (number % 5 === 0) {
//             divisibleBy5.push(number);
//         } else {
//             notDivisible.push(number);
//         }
//     }

//     console.log("Divisible by 3:", divisibleBy3);
//     console.log("Divisible by 5:", divisibleBy5);
//     console.log("Divisible by both 3 and 5:", divisibleByBoth);
//     console.log("Not divisible by 3 or 5:", notDivisible);
// }


// const numbers = [1, 3, 5, 10, 15, 20, 30, 37, 45, 50];
// divisibilityChecker(numbers);


// 6. ATM Withdrawal System: Simulate an ATM that asks for a pin number and allows withdrawals up
// to a limit if the pin is correct.


// 7. Prime Number Generator: Write a function that generates prime numbers up to a certain limit.


// 8. Menu-Based Calculator: Create a simple calculator using a while loop with options for addition,
// subtraction, multiplication, and division.


// 9. Pattern Printing: Print different patterns (like a pyramid, rectangle) based on user input using
// nested loops.


// 10. Palindrome Checker: Write a function to check if a string is a palindrome, using an if-else inside
// a loop.