function solution(string) {
  const symbols = [];
  for (let i = 0; i < symbols.length; i++) {
    if (string[i] === '(' || symbols[i] === '{' || symbols[i] === '[') {
      symbols.push(string[i]);
    } else if (string[i] === ')' && symbols.length !== 0 && symbols[symbols.length - 1] === '(') {
      symbols.pop();
    } else if (string[i] === '}' && symbols.length !== 0 && symbols[symbols.length - 1] === '{') {
      symbols.pop();
    } else if (string[i] === ']' && symbols.length !== 0 && symbols[symbols.length - 1] === '[') {
      symbols.pop();
    } else {
      return false;
    }
  }
  return symbols.length === 0;
}
solution();
