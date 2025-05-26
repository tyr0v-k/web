function towns(arrIn, arrTo) {
  arr1 = [];
  for (let i = 0; i < arrIn.length; i+=2){
    product = new Object();
    product.product = arrIn[i];
    product.quantity = parseInt(arrIn[i+1], 10);
    if (arrTo.includes(arrIn[i])){
      product.quantity += parseInt(arrTo[arrTo.indexOf(arrIn[i])+1], 10);
    }
    arr1[arr1.length] = product;
  }
  for (let i = 0; i < arrTo.length; i+=2){
    if (!arrIn.includes(arrTo[i])){
    product = new Object();
    product.product = arrTo[i];
    product.quantity = parseInt(arrTo[i+1], 10);
    arr1[arr1.length] = product;    
  }
  }
  for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i].product + ' -> ' + arr1[i].quantity);  
  }
  }
towns(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);
