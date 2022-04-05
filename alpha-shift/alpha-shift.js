function solution(inputString) {
  const newString = [];
  for (let i = 0; i < inputString.length; i++) {
    newString.push(String.fromCharCode((inputString[i].charCodeAt() + 1)));
  }
  const answer = newString.join('').replace(/{/g, 'a');
  return answer;
}
solution();
