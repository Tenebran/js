let myArray1 = [3460, 2, -4958, 8453, 5539, -5869, 480059, "Вернулся Первый Массив"];
let myArray2 = [3460, 2, -4958, 8453, 5539, -5869, 480059, 10, "Вернулся Второй Массив"];


function sumArray(calsulateArray){
    calsulateArray = calsulateArray.filter(Number);
    let sum = 0;

    for(let i = 0; i < calsulateArray.length; i++){
        sum = sum + calsulateArray[i]
    }
    return sum;
}

function arrayFilter(array1, array2){
    newArray1 = sumArray(array1);
    newArray2 = sumArray(array2);
   

    if(newArray1 < newArray2){
        return array2;
    } else if (newArray1 > newArray2){
        return array1;
    } else {
        return array1.concat(array2)
    }
}

console.log( arrayFilter(myArray1, myArray2));




