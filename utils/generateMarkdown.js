// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  ## Installation

  Run the following command:  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this repo, please contact me at  ${data.email} or check out my other repos at [${data.github}](https://github.com/${data.guthub}).
 

`;
}

module.exports = generateMarkdown;
