#!/usr/bin/env ts-node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'hours',
        message: 'Enter the number of hours:',
        default: 0,
        validate: (input) => {
            const num = parseInt(input, 10);
            if (isNaN(num) || num < 0) {
                return 'Please provide a non-negative integer for hours.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'minutes',
        message: 'Enter the number of minutes:',
        default: 0,
        validate: (input) => {
            const num = parseInt(input, 10);
            if (isNaN(num) || num < 0 || num >= 60) {
                return 'Please provide an integer between 0 and 59 for minutes.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'seconds',
        message: 'Enter the number of seconds:',
        default: 0,
        validate: (input) => {
            const num = parseInt(input, 10);
            if (isNaN(num) || num < 0 || num >= 60) {
                return 'Please provide an integer between 0 and 59 for seconds.';
            }
            return true;
        }
    }
]);
const hours = parseInt(answers.hours, 10);
const minutes = parseInt(answers.minutes, 10);
const seconds = parseInt(answers.seconds, 10);
const formatTime = (hours, minutes, seconds) => {
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
const endTime = new Date();
endTime.setHours(endTime.getHours() + hours);
endTime.setMinutes(endTime.getMinutes() + minutes);
endTime.setSeconds(endTime.getSeconds() + seconds);
console.log(endTime.getHours());
// const interval = setInterval(() => {
//     const now = new Date().getTime();
//     const remainingTime = endTime.getTime() - now;
//     if (remainingTime <= 0) {
//         clearInterval(interval);
//         console.clear();
//         console.log("Time's up!");
//     } else {
//         const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
//         const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//         const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
//         console.clear();
//         console.log(`Countdown: ${formatTime(remainingHours, remainingMinutes, remainingSeconds)} remaining`);
//     }
// }, 1000);
