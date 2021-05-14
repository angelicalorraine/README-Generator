const inquirer = require('inquirer');
const fs = require('fs');

let prompt = inquirer.createPromptModule();
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



];

prompt(questions)
    .then(({ title }) => {
        const template = `
# ${title}:

    `;
        fs.writeFileSync("./exampleREADME.md", template);

    })