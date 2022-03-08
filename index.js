// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./utils/generateReadMe");

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
        choices: ['MIT', 'None'],
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
        message: "What is your e-mail address?",
        name: "email",
    },
  ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>{
    if(error) throw error;
    console.log(data)
    }
    )}
    
// TODO: Create a function to initialize app
function init() { 
    inquirer.promptUser(questions)
// Use writeFileSync method to use promises instead of a callback function
    .then((answers) => {
    const readMe = generateReadMe(answers)
    writeToFile('README.md', readme, (err) => { 
         console.log('Successfully wrote to READ.me')
    .catch((err) => console.error(err));
    })
})
}
// Function call to initialize app
init();
