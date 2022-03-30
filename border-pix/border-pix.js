function solution(picture) {

  const tPix = '*'.repeat(picture[0].length);
  picture.unshift(tPix);
  for (let i = 0; i < picture.length; i++) {
    picture[i] = picture[i] + '*';
    picture[i] = '*' + picture[i];
  }
  const bPix = '*'.repeat(picture[1].length);
  picture.push(bPix);
  return picture;
}
solution();
