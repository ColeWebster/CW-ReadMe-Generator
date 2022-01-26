const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
// const generateMarkdown = require('.utils/generateMarkdown');
const generateReadMe = require('./utils/generateReadMe');

inquirer
    .prompt([
        {

        },
        {
            type: 'input',
            name: 'headline',
            message: 'Enter the name of your project here:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short summary of your project:'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide the steps to install your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Let us know how you intend to use your program:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide you contact email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide a link to your personal GitHub:'
        },
        {
            type: 'input',
            name: 'linked',
            message: 'Provide a link your LinkedIn:'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Provide the information needed for a user to test the application:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide a method to connect with someone if they have questions during testing:'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['ISC', 'MIT', 'Mozilla', 'Apache 2.0']
        }
    ])
    .then((responses) => {
        const createReadMe = generateReadMe(responses);

        fs.writeFile(`${responses.headline}.md`, createReadMe, (err) =>
            err ? console.log(err) : console.log('Created!')
        );
    });