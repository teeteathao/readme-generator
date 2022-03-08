// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
  } else if (license === "Apache 2.0") {
    return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
      return "https://opensource.org/licenses/MIT";
    }
    // Apache 2.0
    if (license === "Apache 2.0") {
      return "https://opensource.org/licenses/Apache-2.0";
    } else
      { return "";
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "none" ? `${license}\n${renderLicenseLink(license)}` : "";
}

// TODO: Create a function to generate markdown for README
// sections entitled Description, Table of Contents, Installation, 
// Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContent}
  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#email)

  ## Installation

  Run the following command:  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this repo, please contact me at  ${data.email} or check out my other repos at [${data.github}](https://github.com/${data.guthub}).
 

`;
}

module.exports = generateMarkdown;
