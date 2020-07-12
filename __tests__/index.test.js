import reverse from "../dist/index.js"

test('test', () => {
  expect(reverse('hello, world!')).toBe('!dlrow ,olleh');
  expect(reverse('')).toBe('');
  expect(reverse('h')).toBe('h');
});