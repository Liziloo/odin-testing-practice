const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./main');

test('capitalizes "i am here"', () => {
    expect(capitalize('i am here')).toBe('I am here');
  });

test('capitalizes "the cat is snoring."', () => {
    expect(capitalize('the cat is snoring.')).toBe('The cat is snoring.');
});

test('reverses "to Wong Foo"', () => {
    expect(reverseString('to Wong Foo')).toBe('ooF gnoW ot');
});

test('reverses "Japanese anime"', () => {
    expect(reverseString('Japanese anime')).toBe('emina esenapaJ');
});

test('calculator adds "1, 2"', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('calculator adds "2, 3"', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('calculator subtracts "5, 2"', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('calculator subtracts "6, 4"', () => {
    expect(calculator.subtract(6, 4)).toBe(2);
});

test('calculator divides "6, 2"', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('calculator divides "10, 5"', () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

test('calculator multiplies "6, 2"', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
});

test('calculator multiplies "4, 8"', () => {
    expect(calculator.multiply(4, 8)).toBe(32);
});

test('caesarCipher encrypts "Khannn!" by factor of 3', () => {
    expect(caesarCipher('Khannn!', 3)).toBe('Nkdqqq!');
});

test('caesarCipher encrypts "xyz" by factor of 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('object assignment', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('object assignment', () => {
    expect(analyzeArray([5,9,3,2,6])).toEqual({
        average: 5,
        min: 2,
        max: 9,
        length: 5
    });
});