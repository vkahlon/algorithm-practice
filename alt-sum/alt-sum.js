function solution(a) {
  const team1 = [];
  const team2 = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1[i] = a[i];
    } else {
      team2[i] = a[i];
    }
  }
  const sum1 = team1.reduce(function (pv, cv) { return pv + cv; }, 0);
  const sum2 = team2.reduce(function (pv, cv) { return pv + cv; }, 0);
  return [sum1, sum2];
}
