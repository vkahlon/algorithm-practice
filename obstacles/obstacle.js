function solution(inputArray) {
  const maximum = Math.max(...inputArray);
  for (let i = 1; i < maximum; i++) {
    const div = inputArray.some(f => f % i === 0);
    if (!div) {
      return i;
    }
  }
  return maximum + 1;
}
solution();
