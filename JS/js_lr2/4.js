function calc(a, param, b) {
  if (param === "+"){
    return a+b;
  }
  else if (param === "-"){
    return a-b;
  }
  else if (param === "*"){
    return a*b;
  }
  else if (param === "%"){
    return a%b;
  }
  else{
    return "Error"
  }
}
console.log(calc(5, "+", 10));
console.log(calc(25.5, "-", 3));