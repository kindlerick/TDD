function reversed(str) {
    if (!str) {
        return '';
    }
    if (str.length === 0) { 
        return str;
    }

    let tempString = '';

    for(let i = str.length - 1; i >= 0; i--) {
        tempString += str[i];
    }
    return tempString;
  }
  
  module.exports = reversed;

