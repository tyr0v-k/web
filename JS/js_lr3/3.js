function rotate(arr, n) {
  temp = [];
  for (let i = 0; i < n; i++){
    for (let j = 0; j < arr.length; j++){
      if (j == 0){
        temp[arr.length-1] = arr[j];
      }
      else{
        temp[j-1] = arr[j];
      }
    }
    for (let j = 0; j < arr.length; j++){
      arr[j] = temp[j];
    }
  }
  return arr.toString();
}
console.log(rotate([51, 47, 32, 61, 21], 2));
console.log(rotate([32, 21, 61, 1], 4));
console.log(rotate([2, 4, 15, 31], 5));