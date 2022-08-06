const Employee = require('./Employee');

class Manager extends Employee {

    constructor(manager, managerId, managerEmail, office) {

        super(manager, managerId, managerEmail);

        this.office = office;

    }

    getRole() {

        return Manager;
        
    }

}



module.exports = Manager;