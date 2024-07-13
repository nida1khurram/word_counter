#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("**********************************************"));
console.log(chalk.green("WORD COUNTER PROJECT"));
console.log(chalk.yellow("**********************************************"));
let ans = await inquirer.prompt([{
        name: "text",
        type: "input",
        message: chalk.blue("Please Enter Your Text"),
    }]);
const text = ans.text.trim().split(" ");
console.log(chalk.magenta("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"));
console.log(chalk.red `Total Words in your  text : ${chalk.green.underline(text.length)}`);
console.log(chalk.cyan("Thank you "));
console.log(chalk.magenta("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"));
