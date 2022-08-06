const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(engineer, engineerId, engineerEmail, github) {

        super(engineer, engineerId, engineerEmail);

        this.github = github;

    }

    getRole() {

        return Engineer;

    }

    getGithub() {

        return this.github;
        
    }

}


module.exports = Engineer; 