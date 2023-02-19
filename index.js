// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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
        name: 'Installation',
        message: "Please provide installation steps for your project",
    }
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
        type: 'list',
        name: 'license',
        message: "What license do you want to use for your project?",
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README file has been created!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // generate README content based on user input
      const readmeContent = `# ${answers.title}\n\n` +
                            `## Description\n\n${answers.description}\n\n` +
                            `## Installation\n\n${answers.Installation}\n\n` +
                            `## Usage\n\n${answers.usage}\n\n` +
                            `## Credits\n\n${answers.credits}\n\n` +
                            `## License\n\n${answers.license}`;

      
      // call the writeToFile function to write the content to a file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
