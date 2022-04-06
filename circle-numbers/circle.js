function solution(n, firstNumber) {
  const opposite = n / 2 + firstNumber;
  return opposite > n - 1 ? opposite - n : opposite;
}
solution();
