const Employee = require('../lib/Employee');


test('creates an employee object', () => {

    const employee = new Employee('Kelly', '1', 'kelly@yahoo.com');

    expect(employee.name).toBe('Kelly');

    expect(employee.id).toBe('1');

    expect(employee.email).toBe('kelly@yahoo.com');

});

test("gets employee's name value", () => {

    const employee = new Employee('Kelly', '1', 'kelly@yahoo.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));

});

test("gets employee's id value", () => {

    const employee = new Employee('Kelly', '1', 'kelly@yahoo.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));

});

test("gets employee's email value", () => {

    const employee = new Employee('Kelly', '1', 'kelly@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

});

test("gets employee's role", () => {

    const employee = new Employee('Kelly', '1', 'kelly@yahoo.com');

    expect(employee.getRole()).toBe(Employee);

});