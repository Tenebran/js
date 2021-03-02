let myArray = [1,2,4,5]

for (i = 0, j = myArray.length - 1; i <= j; i++, j--) {
    let newArr = myArray[j]
    myArray[j] = myArray[i];
    myArray[i] = newArr;
}

console.log(myArray);