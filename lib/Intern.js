const Employee = require('./Employee');

class Intern extends Employee {

    constructor(intern, internId, internEmail, school) {

        super(intern, internId, internEmail);

        this.school = school;

    }

    getRole() {

        return Intern;

    }

    getSchool() {

        return  this.school;

    }
    
}


module.exports = Intern;