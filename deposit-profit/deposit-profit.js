function solution(deposit, rate, threshold) {
  let count = 0;
  while (deposit < threshold) {
    count++;
    deposit += deposit * rate / 100;
  }
  return count;
}
solution();
