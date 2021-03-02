const myObjct1 = {
    name: "Sergej",
    age: 26, 
    a: [345, 34, 534,],
    b: [69, 87, 54,],
    c: [50, 90, 30],
}

const myObjct2 = {
    name: "Kate",
    age: 20,
    a: [70, 45, 55, 60],
    b: [72, 98, 34,],
    c: [75, 85, 42],
}

const myObjct3 = {
    name: "Kate",
    age: 20,
    a: [70, 45, 55, 60],
    b: [72, 98, 34,],
    c: [75, 85, 42],
}

const myObjct4 = {
    name: "Kate",
    age: 20,
    a: [70, 45, 55, 60],
    b: [72, 98, 34,],
    c: [75, 85, 42],
}

const myObjct5 = {
    name: "Kate",
    age: 20,
    a: [70, 45, 55, 60],
    b: [72, 98, 34,],
    c: [75, 85, 42],
}

let result = [];
let mass = [myObjct1, myObjct2, myObjct3,myObjct4, myObjct5,];


for (let object of mass) {
    let keys = Object.values(object);
    for (let key of keys) {
        result.push(key);
    }
}

let allArrays = [];

for (let i = 0; i < result.length; i++){
    for (let j = 0; j < result[i].length; j++){
         if(Array.isArray(result[i])){
             allArrays.push(result[i][j]);
    }
    }
    }

let sum = 0;
for(var i = 0; i < allArrays.length; i++){
    sum = sum + allArrays[i];
}

document.write(`Поля массивов из пяти обьектов "${allArrays}" <br> Подсчитанные числа массива ${sum}`);