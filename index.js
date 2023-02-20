// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide installation steps for your project",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide how your project should be used",
    },
    {
        type: 'input',
        name: 'credits',
        message: "Please list any contributors to your project",
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Please add any instructions on how users can contribute to your project"
    }
    {
        type: 'input',
        name: 'tests',
        message: "Please provide test instructions for your project",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license do you want to use for your project?",
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your name?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your Github username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = `./example_readme/${fileName}`;
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file has been created!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // generate README content based on user input
        const markdownContent = generateMarkdown(answers);

        // call the writeToFile function to write the content to a file
        writeToFile('README.md', markdownContent);
    }).catch((error) => {
        console.error(error);
    });
}

  

// Function call to initialize app
init();
