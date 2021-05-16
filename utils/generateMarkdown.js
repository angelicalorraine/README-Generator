// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function LicenseBadge(license) {
  let badge = ' ';

  switch (license) {
    case 'GNU AGPLv3':
      badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU GPLv3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'GNU LGPLv3':
      badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'Mozilla Public License 2.0':
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Apache License 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Boost Software License 1.0':
      badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'The Unlicense':
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      break;

  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function LicenseLink(license) {

  let licenseWeb = ' ';

  switch (license) {
    case 'GNU AGPLv3':
      licenseWeb = 'https://spdx.org/licenses/AGPL-3.0-or-later.html';
      break;
    case 'GNU GPLv3':
      licenseWeb = 'https://spdx.org/licenses/GPL-3.0-or-later.html';
      break;
    case 'GNU LGPLv3':
      licenseWeb = 'https://spdx.org/licenses/LGPL-3.0-or-later.html';
      break;
    case 'Mozilla Public License 2.0':
      licenseWeb = 'https://spdx.org/licenses/MPL-2.0.html';
      break;
    case 'Apache License 2.0':
      licenseWeb = 'https://www.apache.org/licenses/LICENSE-2.0.html';
      break;
    case 'MIT License':
      licenseWeb = 'https://spdx.org/licenses/MIT.html';
      break;
    case 'Boost Software License 1.0':
      licenseWeb = 'https://spdx.org/licenses/BSL-1.0.html';
      break;
    case 'The Unlicense':
      licenseWeb = 'https://unlicense.org';
      break;
    default:
      break;
  }
  return licenseWeb;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function LicenseSection(license) {
  const licenseURL = LicenseLink(license);
  console.log('licenseURL', licenseURL);
  const licenseSectionText = `Licensed under [${license}](${licenseURL}).`;
  return licenseSectionText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const license = data.license;
  const licenseSection = LicenseSection(license);
  const licenseBadge = LicenseBadge(license);

  return `# ${data.title}
  ${licenseBadge}

## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Contact](#questions)

## Installaion
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Test
${data.test}

## License 
${licenseSection}


## Questions
* Follow me on Github at [${data.github}](http://github.com/${data.github})

* For more questions contact me: ${data.email}
`;
}

module.exports = {
  generateMarkdown
};
