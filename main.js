function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    const splitString = string.split('');
    const reverseArray = splitString.reverse();
    return reverseArray.join('');
}

const calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    divide: function (x, y) {
        return x / y;
    },
    multiply: function (x, y) {
        return x * y;
    }
}

function caesarCipher(string, num) {
    let cipher = '';
    for (let i = 0; i < string.length; i++) {
        const ascii = string.charCodeAt(i);
        if (ascii > 64 && ascii < 91) {
            cipher += String.fromCharCode(((ascii - 65 + num) % 26) + 65);
        } else if (ascii > 96 && ascii < 123) {
            cipher += String.fromCharCode(((ascii - 97 + num) % 26) + 97);
        } else {
            console.log('triggered')
            cipher += string.charAt(i);
        }
    }
    return cipher;
};

function analyzeArray(arr) {
    let sum = 0, minimum = arr[0], maximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < minimum) {
            minimum = arr[i];
        };
        if (arr[i] > maximum) {
            maximum = arr[i];
        };
    }
    const obj = {
        average: sum / arr.length,
        min: minimum,
        max: maximum,
        length: arr.length
    }
    return obj;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };