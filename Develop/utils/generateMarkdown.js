
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
  // if license is chosen return the link to the text file of the license:
  //if(element){
    //return '[Link to the Licence](../src/' + encodeURIComponent(element) + '.txt)'
  //}else{
  // else return empty string
    //return '';
  //}
  
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
  //let licenceText = '';
  //license.forEach(element => {
    //licenceText +=  element + ': <br />';
    //licenceText += renderLicenseLink(element) + '<br />';
    //switch(element){
      //case 'MIT License':
        //licenceText += 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available \n';
        //break;
      //case 'ISC':
        //licenceText += 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. \n';
        //break;
      //default:
        //licenceText +='';
    //}
    //licenceText += '<br /><br />';
  //});
  //return licenceText;

//}


// TODO: Create a function to generate markdown for README
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
Provide Instructions and examples for use. Include screenshots as needed. Add a screenshot using ![alt text](assets/images/screenshot.png'
-${data.usage}

## Credts
${data.credits}

## License
-${renderLicense(data.license)}

Refer to [https://choosealicense.com/](https://chooselicense.com)

`;
}

module.exports = generateMarkdown;
