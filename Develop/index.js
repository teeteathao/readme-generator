// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a brief description of your project.",
      name: "decription",
    },
    {
        type: "input",
        message: "What is included in your Table of Content?",
        name: "tableOfContent",
    },
    {
        type: "input",
        message: "Describe the steps required to install your project.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples of your project in use.",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose a license for your project",
        choices: ['MIT'],
        name: "license",
    },
    {
        type: "input",
        message: "Provide guidelines on how other developers can contribute to your project.",
        name: "contributing",
    },
    {
        type: "input",
        message: "Provide any tests written for your project.",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your gitHub URL?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
  ]

// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
