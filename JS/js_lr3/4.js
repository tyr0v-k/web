function matrix(mat) {
  sum1 = 0;
  sum2 = 0;
  sum = 0
  for (let i  = 0; i < mat.length; i++){
    sum += mat[i][0];
  }
  for (let i = 0; i < mat.length; i++){
        for (let j = 0; j < mat.length; j++){
      sum1 += mat[i][j];
      sum2 += mat[j][i];
    }
    if(sum1 != sum || sum2 != sum){
      return false;
    }
    else{
      sum1 = 0;
      sum2 = 0;
    }
  }
  return true;
}
console.log(matrix([[4, 5, 6],[6, 5, 4],[5, 5, 5]]));
console.log(matrix([[11, 32, 45],[21, 0, 1],[21, 1, 1]]));
console.log(matrix([[1, 0, 0],[0, 0, 1],[0, 1, 0]]));   