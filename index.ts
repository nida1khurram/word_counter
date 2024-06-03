#! /usr/bin/env node
import inquirer from "inquirer";

let ans = await inquirer.prompt(
    [{
        name:"text",
        type:"input",
        message:"Please Enter Your Text",
    }]
);
const text:string=ans.text.trim().split(" ");
console.log(`${text}`);
console.log(`${text.length}`);

