export default (string) => {
  let i = string.length - 1;
  let reversedString = '';
  while (i >= 0) {
    reversedString += string[i];
    i -= 1;
  }
  return reversedString;
}