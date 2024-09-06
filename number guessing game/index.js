#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        message: "Guess a number between (1-10): ",
        type: "number"
    },
]);
// console.log(answer.userGuessednumber);
if (answer.userGuessednumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
