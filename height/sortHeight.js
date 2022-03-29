function solution(n) {
  const people = n.filter(tree => tree !== -1);
  people.sort((a, b) => b - a);
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== -1) {
      n[i] = people.pop();
    }
  }
  return n;
}
solution();
