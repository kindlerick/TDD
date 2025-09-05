const { sum, subtract, divide, multiply } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('subtract 5 - 1 equals to 4', () => {
    expect(subtract(5, 1)).toBe(4);
})

test('divide 4 by 2 equals to 2', () => {
    expect(divide(4,2)).toBe(2);
})

test('multiply 2 by 2 equals to 4', () => {
    expect(multiply(2,2)).toBe(4);
})