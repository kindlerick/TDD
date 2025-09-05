const object = analyzeArray([1, 8, 3, 4, 2, 6]);

function analyzeArray(array) {

    let arrayAverage, arrayMin, arrayMax, arrayLength;

    arrayLength = array.length;

    let sum = 0;

    for (let i = 0; i < arrayLength; i++) {
        sum += array[i]; 
    }

    arrayAverage = sum / arrayLength;

    arrayMin = Math.min(...array);
    arrayMax = Math.max(...array);

    return {
        average: arrayAverage,
        min: arrayMin,
        max: arrayMax,
        length: arrayLength
    };
}

module.exports = {analyzeArray};
