function solution(inputString) {
  const array = inputString;
  let i = 0;
  let begin = 0;
  let end = -1;
  while (end < begin && i < array.length) {
    if (array[i] == '(') {
      begin = i;
    }
    if (array[i] == ')') {
      end = i;
    }
    i++;
  }
  const temp = array.substring(begin + 1, end);
  if (begin !== -1 && end !== -1) {
    return solution(array.substring(0, begin) +
      [...temp].reverse().join('') +
      array.substring(end + 1));
  }
  return array;
}
solution();
