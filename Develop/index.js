// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "What does this project do?",
    "What are the installation steps?",
    "What instructions or examples are there using the project?",
    "What license does it use?",
    "Are there any contributors?",
    "What tests have you written to be able to run from the readme?",
    "What is your GitHub username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Great..."))
}

// TODO: Create a function to initialize app
function init() {

    inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'install',
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "input",
      name: "license",
      message: questions[4],
    },
    {
      type: "input",
      name: "contribute",
      message: questions[5],
    },
    {
      type: "input",
      name: "test",
      message: questions[6],
    },
    {
      type: "input",
      name: "username",
      message: questions[7],
    },
    {
      type: "input",
      name: "email",
      message: questions[8],
    },
  ])
//   .then((data) => writeToFile("README.md", data))
    .then((data) => writeToFile("README.md", generateMarkdown(data)))
} // put inquirer prompt here

// Function call to initialize app
init();
