const capitalised = require('./test');

test('string', () => {
    const z = 'hello';
    expect(capitalised(z[0])).toMatch(/[A-Z]/);
});



