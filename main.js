function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    const splitString = string.split('');
    const reverseArray = splitString.reverse();
    return reverseArray.join('');
}

module.exports = { capitalize, reverseString };