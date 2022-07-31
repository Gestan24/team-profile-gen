const Employee = require('../lib/Employee');

const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {

    const engineer = new Engineer('Jack', '3', 'jack@gmail.com', 'jack1');

    expect(engineer.name).toBe('Jack');

    expect(engineer.id).toBe('3');

    expect(engineer.email).toBe('jack@gmail.com');

    expect(engineer.github).toBe('jack1');

});

test("gets engineer's name value", () => {

    const engineer = new Engineer('Jack', '3', 'jack@gmail.com', 'jack1');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));

});

test("gets engineer's id value", () => {

    const engineer = new Engineer('Jack', '3', 'jack@gmail.com', 'jack1');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));

});

test("gets engineer's email value", () => {

    const engineer = new Engineer('Jack', '3', 'jack@gmail.com', 'jack1');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));

});

test("gets engineer's role", () => {

    const engineer = new Engineer('Jack', '3', 'jack@gmail.com', 'jack1');

    expect(engineer.getRole()).toBe(Engineer);

});

test("gets engineer's github username", () => {

    const engineer = new Engineer('Jack', '3', 'jack@gmail.com', 'jack1');

    expect(engineer.getGithub()).toBe('jack1');

});