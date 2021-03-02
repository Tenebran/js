let myArray = ['HELLO', 'oooooo'];
let length = 5;


function caclculateRandomSymbol(){
    let symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for(let i = 0; i < length; i++){
        result += symbol.charAt(Math.floor(Math.random() * symbol.length));
    }
    return result
}


function randomArray(youArray){
    let quantity = Math.floor(Math.random() * 20 + 1);
    youArray = [];
    for(let i = 0; i < quantity; i++){
       youArray = youArray.concat(caclculateRandomSymbol());
    }
    return youArray;
    }

    console.log(randomArray(myArray))