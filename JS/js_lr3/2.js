function getMatch(x, y) {
  x = new Set(x);
  y = new Set(y);
  resArr = [];
  res = "";
  for (i of x) {
    if (y.has(i)) {
      resArr.push(i);
    }
  }

  for (i of resArr) {
    res += i + "\n"
  }
  return res;
}
console.log(getMatch(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']));
console.log(getMatch(['R', 'u', 's', 's', 'i', 'a'],
['R', 'u', 't']));