function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const me = [yourLeft, yourRight];
  const hater = [friendsLeft, friendsRight];
  hater.sort();
  me.sort();
  for (let i = 0; i < hater.length; i++) {
    if (hater[i] !== me[i]) {
      return false;
    }
  }
  return true;
}
solution();
