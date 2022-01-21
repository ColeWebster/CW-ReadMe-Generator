const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
// const generateMarkdown = require('.utils/generateMarkdown');

const generateReadMe = (responses) =>
    `# ${responses.headline}

    <h1> Table of Contents </h1>
      <ol>
        <li><a href="#description"> 1. Description</a></li>
        <li><a href="#install"> 2. Installation </a></li>
        <li><a href="#usage"> 4. Usage </a></li>
        <li><a href="#contributing"> 4. Contributing </a></li>
        <li><a href="#test"> 5. Testing </a></li>
        <li><a href="#license"> 6. License </a></li>
      </ol>
    
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)    
    
    
    <h1 id='description'> Description </h1>
          
          - ${reponses.description}
    
    <h1 id='install'> Installation </h1>
          
          - ${responses.install}
    
    <h1 id='usage'> Usage </h1>
          
          - ${responses.usage}
    
    <h1 id='contributing'> Contributing </h1>
          
          - ${responses.email}
          
          - ${responses.github}
          
          - ${responses.linked}
    
    <h1 id='test'> Testing </h1>
         
          - ${responses.testing}
         
          - ${responses.questions}
    
    <h1 id='license'> License </h1>
    Copyright <${year}> <${firstName}>
    
    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    `
    


inquirer
    .prompt([
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
            type: 'input',
            name: 'year',
            message: 'Please enter the current year:'
        },
        {
            type: 'input',
            name: 'firstName',
            message: 'Provide your name for the license:'
        },
    ])
    .then((responses) => {
        const createReadMe = generateReadMe(responses);

        fs.writeFile(`${responses.headline}readme.md`, createReadMe, (err) =>
            err ? console.log(err) : console.log('Created!')
        );
    });
        







