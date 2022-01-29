const fs = require('fs');
const inquirer = require('inquirer');
const {generateReadMe} = require("./utils/generateMarkdown")
const {questions} = require("./utils/questions")

// inquirer.prompt(questions).then(function (answers) {
//     console.log(answers)
// })

const menu = async () => {
    const answers = await inquirer.prompt(questions);
    console.log('Success!!!');
    console.log(answers);
    const readMeContent = generateReadMe(answers);
    writeToFile(readMeContent);
};
    
const writeToFile = (readMeContents) => {
    fs.writeFile("output/readMe.md", readMeContents, (err) => 
    err ? console.log(err)  : console.log("Created!")
    );
};

menu();