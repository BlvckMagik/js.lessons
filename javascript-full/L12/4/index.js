const countOccurrences = (text = '', str) => {
  if (str === '') return null;
  let isHere = 0;
  let i = 0;
  let res = 0;
  while (true) {
    isHere = text.indexOf(str, [i]);
    if (isHere === -1) {
      break;
    }
    i = isHere + 1;
    res += 1;
  }
  return res;
};

const inputText =
  "To the town of Agua Fria rode a stranger one fine day Hardly spoke to folks around him, didn't have too much to say No one dared to ask his business, no one dared to make a slip For the stranger there among them had a big iron on his hip Big iron on his hip";

console.log(countOccurrences(inputText, 's'));
