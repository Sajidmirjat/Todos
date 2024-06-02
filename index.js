#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const todosList = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What would you like to add in your todo list"
        },
        { name: "addMore",
            type: "confirm",
            message: "Are you sure?, you want to add more todos.",
            default: "true"
        }
    ]);
    // console.log(todosList)//for checking whether above code is working or not.
    todos.push(todosList.todo);
    condition = todosList.addMore;
    console.log(todos);
}
