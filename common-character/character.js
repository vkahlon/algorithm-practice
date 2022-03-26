
function commonCharacterCount(s1, s2) {
  let count = 0;
  const arrayOne = s1.split('');
  const arrayTwo = s2.split('');
  for (let i = 0; i < arrayOne.length; i++) {
    const index = arrayTwo.indexOf(arrayOne[i]);
    if (index !== -1) {
      arrayTwo.splice(index, 1);
      count += 1;
    }
  }
  return count;
}
commonCharacterCount();
