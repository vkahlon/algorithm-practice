function solution(arr) {
  let difference = 0;
  let most = 0;
  for (let i = 0; i < arr.length; i++) {
    difference = Math.abs(arr[i] - arr[i + 1]);
    if (difference > most) {
      most = difference;
    }
  }
  return most;
}
solution();
