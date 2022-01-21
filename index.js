const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
// const generateMarkdown = require('.utils/generateMarkdown');

const generateReadMe = ({ headline , gitLinks , liveLink }) =>
    ` ## About the project:
        - Learn more about ${headline} below.

      ## Links:
        - View our repository here: ${gitLinks}
        - View our live deployment here: ${liveLink}  

      ## About the project:  
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
    ])
    .then((responses) => {
        const createReadMe = generateReadMe(responses);

        fs.writeFile(`${responses.headling}readme.md`, createReadMe, (err) =>
            err ? console.log(err) : console.log('Created!')
        );
    });



    // function writetoFile(filname, data) { }
// function init() {
// const init = async () {
//     inquirer.prompt(questions).then((answers => {
//         console.log(answers);
//          writetoFile();
//     });
// }


