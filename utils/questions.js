const questions = [
    {
        type: 'input',
        name: 'headline',
        message: 'Enter the name of your project here:'
    },
    {
        type: 'list',
        message: 'Please choose a license for your ReadMe: ',
        choices: ['Apache 2.0', 'Boost 1.0', 'BSD', 'Creative Commons 4.0'],
        name: 'license'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short summary of your project:'
    },
    {
        type: 'input',
        name: 'liveDeployment',
        message: 'Provide a link to your live deployment:'
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

]

module.exports.questions = questions