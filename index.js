// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
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
        choices: ['MIT', 'Apache 2.0', 'None'],
        name: "license",
    },
    {
        type: "input",
        message: "Provide any contributors to your project.",
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
        message: "What is your e-mail address?",
        name: "email",
    },
  ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
    if(err) throw err;
    console.log(data)
    }
    )}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions)
    .then((answers) => {
    const genreadMe = generateMarkdown(answers)
    writeToFile('README.md', genreadMe)
        //  console.log('Successfully wrote to READ.me')
    
    })
}

// Function call to initialize app
init();
