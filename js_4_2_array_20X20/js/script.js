// Создания рандом массива 10 x 10
let myArray = new Array(10);

function array2d(youArray){
for(let i = 0; i < youArray.length; i++){
  youArray[i] = new Array(10);
    for(let j = 0; j < youArray.length; j++){
      youArray[i][j] =  Math.floor(Math.random()*(20 - -20 + 1) - 20);
       }
}
return youArray
}

myArray = array2d(myArray);
console.log(myArray);


    // Подсчет столбцов
    function sum2d(myArray) {
    let sum = myArray[0].slice(); 
    
    for(let i = 1; i < myArray.length; i++) {
      for(let j = 0; j < sum.length; j++) {
        sum[j] = sum[j] + myArray[i][j];
      }
    }
    return sum;
  }

 let  myArray2 = sum2d(myArray);
  console.log(myArray2);


  // Первый способ удалить в массиве столбцы 
     function filterArray(youArray1, youArray2){
      let newYouArray = [];
      let cycleArray;

    for (let i = 0; i < youArray1.length; i++) {
        cycleArray = youArray1[i];
        newYouArray[i] = [];
    for(let j = 0 ; j < cycleArray.length; j++){
        if(youArray2[j] > 0){
          newYouArray[i].push(cycleArray[j]);
        }
    }
}
    
       return newYouArray
     }

  
let result2 = filterArray(myArray, myArray2)
console.log(result2)



    // Второй способ удалить в массиве столбцы 
let result = myArray.map(function(num) { 
  return num.filter(function(a, i){  
  return myArray2[i] > 0
})
  })
console.log(result)