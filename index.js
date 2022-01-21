const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
// const generateMarkdown = require('.utils/generateMarkdown');

const generateReadMe = (responses) =>
    ` ## About the project:
        - Learn more about ${responses.headline} below.

      ## Links:
        - View our repository here: ${responses.gitLinks}
        - View our live deployment here: ${responses.liveLink}  

      ## About the project:  
        - ${responses.descrip}
    `


inquirer
    .prompt([
        {
            type: 'input',
            name: 'headline',
            message: 'Enter your header here:'
        },
        {
            type: 'input',
            name: 'gitLinks',
            message: 'Enter your Github repository here:'
        },
        {
            type: 'input',
            name: 'liveLink',
            message: 'Enter your live deployments link here:'
        },
        {
            type: 'input',
            name: 'descrip',
            message: 'Describe your motivation for creating this project in a few lines here:'
        },
    ])
    .then((responses) => {
        const createReadMe = generateReadMe(responses);

        fs.writeFile(`${responses.headline}readme.md`, createReadMe, (err) =>
            err ? console.log(err) : console.log('Created!')
        );
    });






