function solution(inputString) {
  let odd = 0;
  const array = inputString.split('');
  let e;
  let pos;
  while (array.length) {
    e = array.pop();
    pos = array.indexOf(e);
    if (pos < 0) {
      odd++;
    } else {
      array.splice(pos, 1);
    }
  }
  return odd < 2;
}
solution();
