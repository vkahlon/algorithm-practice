function solution(n) {
  const array = String(n).split('');
  const num = [];
  array.forEach(el => {
    num.push(Number.parseInt(el));

  });
  return !!num.every(num => num % 2 === 0);
}
solution();
