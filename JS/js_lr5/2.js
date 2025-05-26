function towns(arr) {
  arr1 = [];
  for (let i = 0; i < arr.length; i++){
    arr2 = arr[i].split(' | ');
    town = new Object();
    town.name = arr2[0];
    town.latitude = arr2[1];
    town.longitude = arr2[2];
    arr1[i] = town;
    console.log(arr1[i]);
  }
}
towns(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625']);
