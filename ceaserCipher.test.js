const caesarCipher = require('./ceaserCipher');

test('caesar Cipher', () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test('caesar Cipher', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test('caesar Cipher', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})