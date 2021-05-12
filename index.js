const inquirer = require('inquirer');
const fs = require()

let prompt = inquirer.createPromptModule();
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Where do you live?',
        name: 'live',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'git',
    },
    {
        type: 'input',
        message: 'What is your Linkedin URL?',
        name: 'linked',
    },

];

prompt(questions)
    .then(({ name, live, git, linked }) => {
        const template = `
    `;
        fs.writeFileSync("./ExampleREADME.md", template);

    })