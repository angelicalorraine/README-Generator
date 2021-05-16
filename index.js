const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const md = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        message: 'Title of Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If applicable, what needs to be installed for this project?',
        name: 'installation',
    },
    {
        type: 'list',
        message: 'License for project??',
        name: 'license',
        choices: ['Apache License 2.0', 'The Unlicense', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'MIT License', 'Boost Software License 1.0']
    },
    {
        type: 'input',
        message: 'How should one contribute to this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How would you use this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How do you test this project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },



]



function writeToFile(title, data) {
    fs.writeFile(`${title}.md`, data, (err) =>
        err ? console.log('An error occurred while creating your README file.') : console.log('Your README file was successfully created.')
    );
}


function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log('Answers in prompt', data);
            const generateRead = md.generateMarkdown(data);
            writeToFile(`${data.title}`, generateRead);
        });

}

init();