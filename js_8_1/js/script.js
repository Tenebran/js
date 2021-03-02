const myArray1 = [34, 52, 65];
const myArray2 = [45, 66, 75];
const myArray3 = [785, 666, 25];
const myArray4 = [89, 66, 2];
const myArray5 = [75, 66, 290];

function sumArray(){
    let maxValue = 0;
    let newArray = [];

for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arguments[i].length; j++){
    if(arguments[i][j] > maxValue){
        maxValue = arguments[i][j];
    }
}
newArray.push(maxValue);
maxValue = 0;
}  
     return newArray.join();  
}

let result = sumArray(myArray1, myArray2, myArray3, myArray4, myArray5);
console.log(result);
document.write(result);