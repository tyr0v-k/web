function movies(arr) {
    arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('addMovie')) {
            movie = new Object();
            movie.name = arr[i].replace('addMovie ', '')
            movie.director;
            movie.date;
            arr1[arr1.length] = movie;
        } else if (arr[i].includes('directedBy')) {
            arr3 = arr[i].split(' directedBy ');
            for (let j = 0; j < arr1.length; j++){
              if (arr1[j].name === arr3[0]){
                arr1[j].director = arr3[1];
              }
            }
        } else if (arr[i].includes('onDate')) {
            arr3 = arr[i].split(' onDate ');
            for (let j = 0; j < arr1.length; j++){
              if (arr1[j].name === arr3[0]){
                arr1[j].date = arr3[1];
              }
            }
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].name != null && arr1[i].director != null && arr1[i].date != null) {
          console.log(JSON.stringify(arr1[i]));
        }
    }
}

movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'
]);