// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },

    {
        type: "input",
        message: "Give a description of our project.",
        name: "Description"
    },

    {
        type: "input",
        message: "What steps did you use to create your project?",
        name: "Installation"
    },

    {
        type: "input",
        message: "List your collabrators, if any with links to their github repos.",
        name: "Credit"
    },

    {
        type: "list",
        message: "Choose a License from the following. ",
        name: "License",
        choices: ["MIT", "Apache 1.1", "ISC", "zLIB", "Artistc 2.0"]
    },
    {
        type: "input",
        message: "Please list you projects features, if any.",
        name: "Features"
    },
    {
        type: "input",
        message: "Provide examples of how to contribute if any.",
        name: "Contributions"
    },
    {
        type: "input",
        message: "Provide examples of how to test application.",
        name: "Tests"
    },
    {
        type: "input",
        message: "Please provide your Github Username.",
        name: "Github"
    },
    {
        type: "input",
        message: "Please provide your email.",
        name: "Email"
    },
];

// TODO: Create a function to write README file
function readmeMarkdown(response) { 
return `# ${response.Title}

[Description](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#description)

[Installation](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#installation)

[Credit](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#credit)

[License](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#license)

[Features](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#features)

[Contributions](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#contributions)

[Test](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#test)

[Questions](https://github.com/${response.Github}/Read-me-Readme/blob/main/Develop/README.md#questions)

# Description
 ${response.Description}

# Installation
${response.Installation}

# Credit
${response.Credit}

# License
   
[![License](https://img.shields.io/badge/license-${response.License}-lightgrey.svg)](https://opensource.org/licenses/${response.License})

# Features
${response.Features}

# Contributions
${response.Contributions}

# Test
${response.Tests}

# Questions
${response.Github}(https://github.com/${response.Github})

Please contact me at ${response.Email} if you have any further questions for comments. I will get back to you as soon as possible.

Video Usage Link(https://drive.google.com/file/d/1Jw8BwIsUK7yxUyN5TkXvKtyz3UYFdptq/view)
`;
} 

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    //feed res to generate markdown function
    const mdpageContent = readmeMarkdown(response);
    fs.writeFile('README.md', mdpageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
    console.log(response)
  })
 }

// Function call to initialize app
init();
