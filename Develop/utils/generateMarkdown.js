//Variable for license details
const licenseInformation = [
  {
    name: 'GNU GPLv3',
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licesnses/gpl-3.0)",
    link: "https://choosealicense.com/license/gpl-3.0"
  },
  {
    name: 'MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://choosealicense.com/license/mit/'
  }
]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description:
${data.description}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)

## Installation:
${data.installation}

## Usage:
${data.usage}

## Credts
${data.credits}

## License
${data.license}
`;
}

module.exports = generateMarkdown;
