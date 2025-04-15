function sum(n) {
    let sum = 0;
  while (n > 0){
    sum = sum + n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sum(2345678));
console.log(sum(97561));
console.log(sum(543));