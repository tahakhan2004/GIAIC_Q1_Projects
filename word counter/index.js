#! /usr/bin/env node
import inquirer from "inquirer";
const senta = await inquirer.prompt([
    {
        name: "sentance",
        message: "Enter the sentence to count the word: ",
        type: "input"
    },
]);
const wordcount = senta.sentance.trim().split(" ");
const characCount = senta.sentance.trim().length;
console.log("Your sentence word count is ", wordcount.length);
console.log("Your sentence character count is ", characCount);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare.area);
