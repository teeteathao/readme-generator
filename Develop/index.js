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
      message: "What are the sections?",
      name: "section",
    },
    {
        type: "input",
        message: "Table of Content?",
        name: "lang",
    },
    {
        type: "input",
        message: "Installation?",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "License?",
        name: "license",
    },
    {
        type: "input",
        message: "Contributing?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests",
    },
    {
        type: "input",
        message: "Questions?",
        name: "questions",
      },
  ]

// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
