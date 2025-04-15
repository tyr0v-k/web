function douToDec(n) {
  if (n.length !== 8){
    return "Error"
  }
  return parseInt(n, 2);
}
console.log(douToDec("00001001"));
console.log(douToDec("11110000"));
console.log(douToDec("111100001"));