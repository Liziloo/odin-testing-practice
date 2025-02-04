const { capitalize, reverseString } = require('./main');

test('capitalizes "i am here"', () => {
    expect(capitalize('i am here')).toBe('I am here');
  });

test('capitalizes "the cat is snoring."', () => {
    expect(capitalize('the cat is snoring.')).toBe('The cat is snoring.');
});

test('reverses "to Wong Foo"', () => {
    expect(reverseString('to Wong Foo')).toBe('ooF gnoW ot');
});

test ('reverses "Japanese anime"', () => {
    expect(reverseString('Japanese anime')).toBe('emina esenapaJ');
});