//index.test.js
const index = require('./user.js')
test('Validate User', () => {
    const result = index.validateLogin('firstname', 'lastname', 'email');
    expect(result).toEqual('John', 'Doe',  'johndoe@email.com');
})