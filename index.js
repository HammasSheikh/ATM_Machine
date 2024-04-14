#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
console.log("your balance is: " + myBalance);
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin == myPin) {
    console.log("pin code matched!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // =, -=, +=
        myBalance -= amountAns.amount;
        if (amountAns.amount <= 10001) {
            console.log(`> ${amountAns.amount} have been withdrawn from your account
> now your remaining balance is ${myBalance}`);
        }
        else if (amountAns.amount >= 10000) {
            console.log("sorry you do not have enough balance to withdraw");
        }
    }
    else {
        console.log("your balance is: " + myBalance);
    }
    console.log("Thank you!");
}
else {
    console.log("incorrect pin number");
}
