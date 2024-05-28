#! /usr/bin/env node
import inquirer from "inquirer";

let currency: any = {
  USD: 1, // base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  KDINAR: 906.04,
  YUAN: 38,
};

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Enter your from currency",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "KDINAR", "YUAN"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter your to currency",
    choices: ["USD", "EUR", "GBP", "PKR", "INR", "KDINAR", "YUAN"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter your amount to convert:",
  },
]);

let fromAmount = currency[userAnswer.from]; // exchange rate
let toAmount = currency[userAnswer.to]; // exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.floor(convertedAmount));
