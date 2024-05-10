#! /usr/bin/env node
import inquirer from "inquirer";
let username = await inquirer.prompt([{
        name: "name",
        message: "enter your name",
        type: "input",
    }]);
console.log(`welcome ${username.name}`);
console.log("LET'S START");
let answer = await inquirer.prompt([{
        name: "q1",
        message: "capital of pakistan",
        type: "list",
        choices: ["karachi", "india", "islamabad"]
    }]);
let a;
if (answer.q1 == "islamabad") {
    a = 1;
}
else {
    a = 0;
}
let answer2 = await inquirer.prompt([{
        name: "q1",
        message: "capital of india",
        type: "list",
        choices: ["delhi", "mumbai", "china"]
    }]);
let b;
if (answer2.q1 == "delhi") {
    b = 1;
}
else {
    b = 0;
}
let answer3 = await inquirer.prompt([{
        name: "q1",
        message: "capital of singapore",
        type: "list",
        choices: ["wales", "singapore", "chishinghaena"]
    }]);
let c;
if (answer3.q1 == "singapore") {
    c = 1;
}
else {
    c = 0;
}
let answer4 = await inquirer.prompt([{
        name: "q1",
        message: "capital of afghanistan",
        type: "list",
        choices: ["kabul", "peshawar", "chile"]
    }]);
let d;
if (answer4.q1 == "kabul") {
    d = 1;
}
else {
    d = 0;
}
let answer5 = await inquirer.prompt([{
        name: "q1",
        message: "capital of china",
        type: "list",
        choices: ["beijing", "mumbai", "hanoi"]
    }]);
let e;
if (answer5.q1 == "beijing") {
    e = 1;
}
else {
    e = 0;
}
let answer6 = await inquirer.prompt([{
        name: "q1",
        message: "capital of america",
        type: "list",
        choices: ["delhi", "washington dc", "la"]
    }]);
let f;
if (answer6.q1 == "washington dc") {
    f = 1;
}
else {
    f = 0;
}
let answer7 = await inquirer.prompt([{
        name: "q1",
        message: "capital of veitnam",
        type: "list",
        choices: ["hanoi", "mumbai", "chichawatni"]
    }]);
let g;
if (answer7.q1 == "hanoi") {
    g = 1;
}
else {
    g = 0;
}
let answer8 = await inquirer.prompt([{
        name: "q1",
        message: "capital of thailand",
        type: "list",
        choices: ["bangkok", "hanoi", "beijing"]
    }]);
let h;
if (answer8.q1 == "bangkok") {
    h = 1;
}
else {
    h = 0;
}
let answer9 = await inquirer.prompt([{
        name: "q1",
        message: "capital of japan",
        type: "list",
        choices: ["sakura", "tokyo", "osaka"]
    }]);
let i;
if (answer9.q1 == "tokyo") {
    i = 1;
}
else {
    i = 0;
}
let answer0 = await inquirer.prompt([{
        name: "q1",
        message: "capital of korea",
        type: "list",
        choices: ["seoul", "daegu", "ilsan"]
    }]);
let j;
if (answer0.q1 == "seoul") {
    j = 1;
}
else {
    j = 0;
}
let x = a + b + c + d + e + f + g + h + i + j;
console.log(`${username.name} you scored ${x}`);
