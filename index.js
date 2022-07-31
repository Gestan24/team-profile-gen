const inquirer = require('inquirer');

const promptManager = () => {


    return inquirer.prompt([

        {

            type: 'input',

            name: 'managerName',

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

            name: 'managerId',

            message: 'Please enter your employee id!',

            validate: idInput => {

                if (idInput) {

                    return true

                } else {

                    console.log('Please enter your employee id!');

                    return false;

                }

            }

        },

        {

            type: 'input',

            name: 'managerEmail',

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

            name: 'officeNumber',

            message: 'What is your github username?',

            validate: officeInput => {

                if (officeInput) {

                    return true

                } else {

                    console.log('Please enter your office number!');

                    return false;

                }

            }

        }


    ]);

};

const promptAddTeam = profileData => {

    console.log(`
    
    ================
    Add new employee
    ================
    
    `);

    if (!profileData.teams) {

        profileData.teams = [];

    }

    return inquirer.prompt([

        {

            type: 'list',

            name: 'employeeRole',

            message: 'What type of employee do you wish to add to your team?',

            choices: ['Engineer', 'Intern'],

            validate: roleInput => {

                if (roleInput === 'Engineer') {

                    inquirer.prompt([

                        {

                            type: 'input',

                            name: 'engineerName',

                            message: "What is your engineer's name?",

                            validate: engineerName => {

                                if (engineerName) {

                                    return true

                                } else {

                                    console.log("Please enter your engineer's name!");

                                    return false;

                                }

                            }

                        },

                        {

                            type: 'input',

                            name: 'engineerId',

                            message: "What is your engineer's id?",

                            validate: engineerId => {

                                if (engineerId) {

                                    return true

                                } else {

                                    console.log("Please enter your engineer's id!");

                                    return false;

                                }

                            }

                        },

                        {

                            type: 'input',

                            name: 'engineerEmail',

                            message: "What is your engineer's email?",

                            validate: engineerEmail => {

                                if (engineerEmail) {

                                    return true

                                } else {

                                    console.log("Please enter your engineer's email!");

                                    return false;

                                }

                            }

                        },

                        {

                            type: 'input',

                            name: 'github',

                            message: "What is your engineer's github username?",

                            validate: githubInput => {

                                if (githubInput) {

                                    return true

                                } else {

                                    console.log("Please enter your engineer's github username!");

                                    return false;

                                }

                            }

                        }


                    ])


                } else if (roleInput === 'Intern') {

                    inquirer.prompt([

                        {

                            type: 'input',

                            name: 'internName',

                            message: "What is your intern's name?",

                            validate: internName => {

                                if (internName) {

                                    return true

                                } else {

                                    console.log("Please enter your intern's name!");

                                    return false;

                                }

                            }

                        },

                        {

                            type: 'input',

                            name: 'internId',

                            message: "What is your intern's id?",

                            validate: internId => {

                                if (internId) {

                                    return true

                                } else {

                                    console.log("Please enter your intern's id!");

                                    return false;

                                }

                            }

                        },

                        {

                            type: 'input',

                            name: 'internEmail',

                            message: "What is your intern's email?",

                            validate: internEmail => {

                                if (internEmail) {

                                    return true

                                } else {

                                    console.log("Please enter your intern's email!");

                                    return false;

                                }

                            }

                        },

                        {

                            type: 'input',

                            name: 'internSchool',

                            message: "What school did your intern's attend?",

                            validate: schoolInput => {

                                if (schoolInput) {

                                    return true

                                } else {

                                    console.log("Please enter your intern's school name!");

                                    return false;

                                }

                            }

                        }

                    ])

                } else {

                    console.log('Please choose the type of employee you want to add!');

                    return false;

                }



            }

        },

        {

            type: 'confirm',

            name: 'confirmAddMember',

            message: 'Would you like to add another member to your team?',

            default: false

        }

    ])

        .then(teamsData => {

            profileData.teams.push(teamsData);

            if (teamsData.confirmAddMember) {

                return promptAddTeam(profileData);

            } else {

                return profileData;

            }

        });

};

promptManager()

    .then(promptAddTeam)

    .then(profileData => {

        return generatePage(profileData);
        
    })