
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = required('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
                    console.log('Please entera project title to continue!');
                    return false;
                }

            }

        },
        //Description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to provide a project description!');
                    return false;
                }
            }
        },
        //Description ends
        //Table of Contents (Optional) will be in the generatemMarkdown.js.
        //Installation
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your projects? Provide a step-by-step description of how to get the development environment running.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to provide installation intructions to continue!');
                    return false;
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
                    console.log('Please provide instructions for how to use this project.');
                    return false;
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
                    console.log('You must list any contributors relevant to this project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'If you used any third-party assets that require attribution, list the creator with links to their primary web presence in this section.',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('If the project did not use any third party assets, please skip this prompt.');
                    return true;
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
                    console.log('Please list any tutorials that you followed to create this project.');
                    return true;
                }
            }
        },
        //Credits ends
        // Test Instructions 
        {
            type: 'input',
            name: 'testing',
            message: 'How do you test this project? (Required)',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('You need to describe how to test this project!');
                    return false;
                }
            }
        },
        // License
        {
            type: 'checkbox',
            name: 'license',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('A license must be chosen for this project.');
                    return false;
                }
            }

        },

        console.log('The previous sections are the bare minimum, and your project will ultimately determine the content of the document. You might also want to consider adding the following sections.')

    ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    readmeMarkdown = generateMarkdown(data);
    // console.log(readmeMarkdown);
    fs.writeFile(fileName, readmeMarkdown, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log('Readme.md created!');
    });
};
const createReadMe = util.promisfy(writetoFile);
// TODO: Create a function to initialize app
function init() {
    console.log(`
    ===================================
    Create a New ReadMe file
    ===================================
    `);
    return inquirer.prompt(questions)
    .then(answersData =>{
        writetoFile('./dist/README.md', answersData);
    }).catch(err => {
        console.log(err);
    })
};

// Function call to initialize app
init();
