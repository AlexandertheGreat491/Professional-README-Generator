// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = required('fs');
const { writeFile, copyFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        //Description
        {
            type: 'input',
            name: 'description',
            message: 'What was your motivation? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Why did you build this project? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What problem does it solve? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What did you learn? (Required)'
        },
        //Description ends
        //Table of Contents (Optional) will be in the markdown.
        //Installation
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your projects? Provide a step-by-step description of how to get the development environment running.'
        },
    ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
