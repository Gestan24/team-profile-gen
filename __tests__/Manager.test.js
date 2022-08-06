const Manager = require('../lib/Manager');

const Employee = require('../lib/Employee');


test('creates an Manager object', () => {

    const manager = new Manager('Chris', '2', 'Chris@gmail.com', '1');

    expect(manager.name).toBe('Chris');

    expect(manager.id).toBe('2');

    expect(manager.email).toBe('Chris@gmail.com');

    expect(manager.office).toBe('1');

});

test("gets manager's name value", () => {

    const manager = new Manager('Chris', '2', 'Chris@gmail.com', '1');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));

});

test("gets manager's id value", () => {

    const manager = new Manager('Chris', '2', 'Chris@gmail.com', '1');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));

});

test("gets manager's email value", () => {

    const manager = new Manager('Chris', '2', 'Chris@gmail.com', '1');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));

});

test("gets manager's role", () => {

    const manager = new Manager('Chris', '2', 'Chris@gmail.com', '1');

    expect(manager.getRole()).toBe(Manager);

});

