//Packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//Array of questions for user input.
const questions =
    
        [
            //Project name
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the project (Required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter the title of your project.');
                    }
                }

            },
            //Description
            {
                type: 'input',
                name: 'why',
                message: 'Why did you build this project?',
                validate: whyInput => {
                    if (whyInput) {
                        return true;
                    } else {
                        console.log('Provide your reason/reasons for building this project.');
                    }
                }
            },
            {
                type: 'input',
                name: 'problem',
                message: 'What problem does it solve?',
                validate: problemInput => {
                    if (problemInput) {
                        return true;
                    } else {
                        console.log('Provide a explanation of the problem solved by this project.');
                    }
                }
            },
            {
                type: "input",
                name: 'learn',
                message: 'What did you learn?',
                validate: learnInput => {
                    if (learnInput) {
                        return true;
                    } else {
                        console.log('Summarize what you learned in creating this project.');
                    }
                }
            },
            //Description ends
            //Installation
            {
                type: 'input',
                name: 'install',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    } else {
                        console.log('Please summarize the steps a developer would need to take, in order to install your project on their local computer.');
                    }
            
                }
            },
            //Installation ends
            //Usage
            {
                type: 'input',
                name: 'usage',
                message: 'Provide Instructions and examples for use. Include screenshots as needed.',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please provide usage instructions.')
                    }
                }
            },
            //Usage ends
            //Credits
            {
                type: 'input',
                name: 'credits',
                message: 'List your collaborators, if any, with links to their GitHub profiles.',
                validate: creditsInput => {
                    if (creditsInput) {
                        return true;
                    } else {
                        console.log('Please list any collaborators.')
                    }
                }
            },
            {
                type: 'input',
                name: 'credits',
                message: 'If you used any third-party assets that require attribution, list the creator with links to their primary web presence in this section.',
                valdiate: creditsInput => {
                    if (creditsInput) {
                        return true;
                    } else {
                        console.log('Provide any necessary attribution to third-party assets.');
                    }
                }
            },
            {
                type: 'input',
                name: 'credits',
                message: 'If you followed tutorials, include links to those here as well.',
                validate: creditsInput => {
                    if (creditsInput) {
                        return true;
                    } else {
                        console.log('Please provide links to any tutorials used in creating your project.');
                    }
                }
            },
            //Credits ends
            // License
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project.',
                choices: [
                    'Apache',
                    'MIT',
                    'GNU General Public License (GPL)'
                ],
                validate: licenseInput => {
                    if (licenseInput) {
                        return true;
                    } else {
                        console.log('Please select a license for your project.');
                    }
                }

            }
            //License ends
                

        ];



//Function writes the README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('sampleREADME.md file created!!');
    })
};

//Function to initializes the app.
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("sampleREADME.md", generateMarkdown(data))
    });
};

// Function call to initialize app.
init();
