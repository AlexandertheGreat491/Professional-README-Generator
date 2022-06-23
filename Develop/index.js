
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//Creates an array of questions for user input
const questions = () => {
    return inquirer.prompt(
        [
            //Project name
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the project (Required)',

            },
            //Description
            {
                type: 'input',
                name: 'why',
                message: 'Why did you build this project?',
            },
            {
                type: 'input',
                name: 'problem',
                message: 'What problem does it solve?'
            },
            {
                type: "input",
                name: 'learn',
                message: 'What did you learn?'
            },
            //Description ends
            //Installation
            {
                type: 'input',
                name: 'install',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
            },
            //Installation ends
            //Usage
            {
                type: 'input',
                name: 'usage',
                message: 'Provide Instructions and examples for use. Include screenshots as needed. Add a screenshot using ![alt text](assets/images/screenshot.png',
            },
            //Usage ends
            //Credits
            {
                type: 'input',
                name: 'credits',
                message: 'List your collaborators, if any, with links to their GitHub profiles.',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'If you used any third-party assets that require attribution, list the creator with links to their primary web presence in this section.',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'If you followed tutorials, include links to those here as well.',
            },
            //Credits ends
            // Test Instructions 
            {
                type: 'input',
                name: 'testing',
                message: 'How do you test this project? (Required)',
            },
            // License
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project.',
                choices: [
                    'Apache',
                    'MIT',
                    'GNU General Public License (GPL)'
                ]

            }
                .then((data) => {
                    console.log(data);
                    fs.writeFile('READEME.md', generateMarkdown(data),
                        error => {
                            if (error) {
                                console.log('Please input all of the data.');
                            }
                        }
                    )
                })

        ]);
};


//Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File create!!');
    })
};

//Creates a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data))
    });
};

// Function call to initialize app
init();
