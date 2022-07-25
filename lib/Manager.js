const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, school) {
        // call employee constructor
        super (name, id, email); 

        this.school = school; 
    }
    //return school
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// export
module.exports = Intern; 
