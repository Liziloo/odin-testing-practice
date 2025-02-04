const { capitalize } = require('./main');

test('capitalizes "i am here"', () => {
    expect(capitalize('i am here')).toBe('I am here');
  });

  test('capitalizes "the cat is snoring."', () => {
    expect(capitalize('the cat is snoring.')).toBe('The cat is snoring.');
  });