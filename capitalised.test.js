const capitalised = require('./capitalised');

test('capitalized string', () => {
    const s = 'hello';
    expect(capitalised(s[0])).toMatch(/[A-Z]/);
});

