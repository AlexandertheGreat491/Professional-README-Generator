


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license =>{
  // If license is chosen:
if(license){
  const getBadgeArr = license.map(element => {
    return `![alt text](https://img.shields.io/static/v1?label=licence&message=${encodeURIComponent(element)}&color=GREEN)`;
  });

  return getBadgeArr.join(' ');

}else{
  // if no license is chosen return empty string
  return '';
}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = element => {
  // if license is chosen return the link to the text file of the license:
  if(element){
    return '[Link to the Licence](../src/' + encodeURIComponent(element) + '.txt)'
  }else{
  // else return empty string
    return '';
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenceText = '';
  license.forEach(element => {
    licenceText +=  element + ': <br />';
    licenceText += renderLicenseLink(element) + '<br />';
    switch(element){
      case 'GNU AGPLv3':
        licenceText += 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available \n';
        break;
      case 'GNU GPLv3':
        licenceText += 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. \n';
        break;
      case 'GNU LGPLv3':
        licenceText += 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work \n';
        break;
      case 'Mozilla Public License 2.0':
        licenceText += 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.\n';
        break;
      case 'Apache License 2.0':
        licenceText += 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. \n';
        break;
      case 'MIT License':
        licenceText += 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. \n';
        break;
      case 'Boost Software License 1.0':
        licenceText += 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code. \n';
        break;
      case 'The Unlicense':
        licenceText += 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code. \n';
        break;
      default:
        licenceText +='';
    }
    licenceText += '<br /><br />';
  });
  return licenceText;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  // license badge
${renderLicenseBadge(data.license)}

## Description:
${data.description}

## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[Credits](#credits)
*[License](#license)

## Installation:
${data.installation}

## Usage:
${data.usage}

## Credts
${data.credits}

## License
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
