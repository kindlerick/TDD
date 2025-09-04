const reversed = require('./reversed');

test('reverses a string', () => {
    const s = 'mystring';
    expect(reversed(s).toBe('gnirtsym'));
})

test('reverses a single character string', () => {
    expect(reversed('a').toBe('a'));
  });

test('reverses a string with spaces', () => {
  expect(reversed('hello world')).toBe('dlrow olleh'); // Test case with spaces
});