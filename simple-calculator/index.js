#! /usr/bin/env node
// import inquirer from "inquirer"
// const answer = await inquirer.prompt([
//     {message: "Enter first number", type: "number", name:"firstNum"},
//     {message: "Enter second number", type: "number", name:"secondNum"},
//     {
//         message: "Select one of the operators to perform operation",
//         type: "list",
//         name :"operator",
//         choices:["Addition", "Subtraction", "Multiplication", "Division"]
//     }
// ])
// // console.log(answer);
// if (answer.operator === "Addition") {
//     console.log(answer.firstNum + answer.secondNum);
// }else if(answer.operator === "Subtraction"){
//     console.log(answer.firstNum - answer.secondNum);
// }else if(answer.operator === "Multiplication"){
//     console.log(answer.firstNum * answer.secondNum);
// }else if(answer.operator === "Division"){
//     console.log(answer.firstNum / answer.secondNum);
// }else{
//     console.log("Select valid operator");
// }
var iterator = 0;
while (iterator < 10) {
    console.log("Inside while");
    iterator++;
}
var i = 0;
do {
    console.log("Inside do while");
    // i++;
} while (i > 0);
// For off loop   [ HW ]
var arr = ["taha", "khan"];
var namee = arr[0];
console.log(namee);
