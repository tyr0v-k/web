function evenOdd(n) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n.length; i++){
    sum1 += n[i];
    if (n[i]%2==0){
      n[i]+=i;
    }
    else{
      n[i]-=i;
    }
    sum2 += n[i];
  }
  return n.toString() + "\n" + sum1 + "\n" + sum2;
}
console.log(evenOdd([5, 15, 23, 56, 35]));
console.log(evenOdd([-5, 11, 3, 0, 2]));