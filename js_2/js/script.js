let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
let c = prompt("Введите третье число");

let userNumberA = parseInt(a);
let userNumberB = parseInt(b);
let userNumberC = parseInt(c);

alert(userNumberA + userNumberB + userNumberC);


let myNumberA = userNumberA % 2;
let myNumberB = userNumberB % 2;
let myNumberC = userNumberC % 2;

if(myNumberA == 0){
console.log("Первое число четное!");
} else if(myNumberA == 1){
    console.log("Первое число нечетное!!");
}

if(myNumberB == 0){
    console.log("Второе число четное!");
} else if(myNumberB == 1){
    console.log("Второе число нечетное!");
}

if(myNumberC == 0){
    console.log("Третье число четное!")
} else if(myNumberC == 1){
    console.log("Третье число нечетное!")
}