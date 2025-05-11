function progressBar(n) {
  if (n % 10 !== 0 || n < 0 || n > 100){
    return "Invalid value";
  }
  if (n == 100){
    return n+"% Complete!\n[%%%%%%%%%%]"
  }
  return n+"%"+" ["+"%".repeat(n/10)+".".repeat(10-n/10)+"]"+"\nStill loading...";
}
console.log(progressBar(30));
console.log(progressBar(50));
console.log(progressBar(100));