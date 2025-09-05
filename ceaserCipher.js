function caesarCipher(string, x) {

    function isAlpha(char) {
        return /^[a-zA-Z]$/.test(char);
    }

    const newString = [];

    for(let i = 0; i < string.length; i++) {

        const tempChar = string[i];

        const charCode = tempChar.charCodeAt(0);

        let newCharCode = charCode + x;

        if(!isAlpha(tempChar)) {
            newCharCode = charCode;
        } else {
            if(tempChar >= 'a' && tempChar <= 'z') {
                if (newCharCode > 'z'.charCodeAt(0)) {
                    newCharCode = newCharCode - 26;
                } else if (newCharCode < 'a'.charCodeAt(0)) {
                    newCharCode = newCharCode + 26;
                }
            } else if (tempChar >= 'A' && tempChar <= 'Z') {
                if (newCharCode > 'Z'.charCodeAt(0)) {
                    newCharCode = newCharCode - 26;
                } else if (newCharCode < 'A'.charCodeAt(0)) {
                    newCharCode = newCharCode + 26;
                }
            }
        }

        newString.push(String.fromCharCode(newCharCode));
    }

    return newString.join('');
}

module.exports = caesarCipher;
