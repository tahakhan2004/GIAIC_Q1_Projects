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


let iterator = 0
while (iterator < 10) {
    console.log("Inside while");
    iterator++;
}

let i = 0
do {
    console.log("Inside do while");
    // i++;
}while(i > 0)

// For off loop   [ HW ]

const arr: string[] = ["taha", "khan"]
let [namee] = arr
console.log(namee);


const obj = {
    name : "taha khan",
    age : 45,
}
const person: {name: string; age : number} = {
    name : "taha khan",
    age : 45,
}
// console.log(obj.name);
// console.log(obj['name']);


