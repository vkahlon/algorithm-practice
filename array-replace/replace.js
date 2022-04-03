function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(the => (the === elemToReplace ? substitutionElem : the));
}
solution();
