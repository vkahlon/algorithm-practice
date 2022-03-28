function solution(n) {
  n = n.toString();
  const halfValue = n.length / 2;
  let firstHalfSum = 0;
  let secondHalfSum = 0;

  for (let i = 0; i < halfValue; i++) {
    firstHalfSum += +n[i];
  }
  for (let f = halfValue; f < n.length; f++) {
    secondHalfSum += +n[f];
  }

  if (firstHalfSum === secondHalfSum) {
    return true;
  } else {
    return false;
  }
}

solution(1230);
