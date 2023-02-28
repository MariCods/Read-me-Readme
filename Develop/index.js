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
        choices: ["MIT", "Apache", "ISC", "zLIB", "Artistc"]
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
];

// TODO: Create a function to write README file
function readmeMarkdown(response) { 
    return `#${response.Title}

    #Description
    ${response.Description}

    #Installation
    ${response.Installation}

    #Credit
    ${response.Credit}

    #License
    ${response.License}

    #Features
    ${response.Features}

    #Contributions
    ${response.Contributions}

    #Test
    ${response.Tests}
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
