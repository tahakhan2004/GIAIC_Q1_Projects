#! /usr/bin/env node

import inquirer from "inquirer"


const senta:{ sentance: string} = await inquirer.prompt([
    {
        name: "sentance",
        message: "Enter the sentence to count the word: ",
        type: "input"
    },
])
const wordcount = senta.sentance.trim().split(" ")
const characCount = senta.sentance.trim().length

console.log("Your sentence word count is " ,wordcount.length);
console.log("Your sentence character count is " ,characCount);


  