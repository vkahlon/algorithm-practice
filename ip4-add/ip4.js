function solution(inputString) {
  const array = inputString.split('.');
  if (array.length === 4) {
    const res = array.every(number => {
      if (number >= 0 && number <= 255 && number !== '' && number !== '00' & number !== '01') {
        return true;
      } else {
        return false;
      }
    });
    return res;
  }
  return false;
}
