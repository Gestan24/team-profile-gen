const inquirer = require('inquirer');

const promptQuestions = teamProfileData => {

    teamProfileData = [];

    return inquirer.prompt([

        {

            type: 'input',

            name: 'name',

            message: 'What is your name?',

            validate: nameInput => {

                if (nameInput) {

                    return true

                } else {

                    console.log('Please enter your name!');

                    return false;

                }

            }

        },

        {
            
            type: 'input',

            name: 'email',

            message: 'What is your email address?',

            validate: emailInput => {

                if (emailInput) {

                    return true

                } else {

                    console.log('Please enter your email address!');

                    return false;

                }

            }

        },

        {

            type: 'input',

            name: 'github',

            message: 'What is your github username?',

            validate: githubInput => {

                if (githubInput) {

                    return true

                } else {

                    console.log('Please enter your username!');

                    return false;

                }

            }

        }


    ])
}