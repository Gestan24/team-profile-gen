const Employee = require('../lib/Employee');

const Intern = require('../lib/Intern');

test('creates an Intern object', () => {

    const intern = new Intern('Amanda', '4', 'amanda@gmail.com', 'UW-Milwaukee');

    expect(intern.name).toBe('Amanda');

    expect(intern.id).toBe('4');

    expect(intern.email).toBe('amanda@gmail.com');

    expect(intern.school).toBe('UW-Milwaukee');

});

test("gets intern's name value", () => {

    const intern = new Intern('Amanda', '4', 'amanda@gmail.com', 'UW-Milwaukee');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));

});

test("gets intern's id value", () => {

    const intern = new Intern('Amanda', '4', 'amanda@gmail.com', 'UW-Milwaukee');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));

});

test("gets intern's email value", () => {

    const intern = new Intern('Amanda', '4', 'amanda@gmail.com', 'UW-Milwaukee');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));

});

test("gets intern's role", () => {

    const intern = new Intern('Amanda', '4', 'amanda@gmail.com', 'UW-Milwaukee');

    expect(intern.getRole()).toBe(Intern);

});

test("gets intern's school", () => {

    const intern = new Intern('Amanda', '4', 'amanda@gmail.com', 'UW-Milwaukee');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    
})

