
//Function returns a license.

function renderLicense(license){
  
  if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  if (license === 'GNU General Public License (GPL)') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)'
  }
}


//Function generates the markdown for the README.
function generateMarkdown(data) {
  return `# ${data.title}
  

## Description:
-${data.why}
-${data.problem}
-${data.learn}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)

## Installation:
To install this application, please follow the steps below:
-${data.install}

## Usage:
Provide Instructions and examples for use. Include screenshots as needed.
-${data.usage}

## Credts
${data.credits}

## License
-${renderLicense(data.license)}

Refer to [https://choosealicense.com/](https://chooselicense.com)

`;
}

module.exports = generateMarkdown;
