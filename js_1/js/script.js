let userRadius = prompt("Введите радиус основания");
let userHeight = prompt("Введите Высоту Целиндра");

let mySquare = Math.PI * userRadius * userRadius;
let myVolume = Math.PI * userRadius * userRadius * userHeight;



document.write(`<br> ************** <br>`);
document.write(`<br> Обьем цилиндра с площадью основы  ${mySquare.toFixed(3)}, радиусом ${userRadius} и высотой ${userHeight} равен:<br>`);
document.write(`<br> -------------------- <br>`);
document.write(`<br> V = ${myVolume.toFixed(3)} <br>`);
document.write(`<br> -------------------- <br>`);
document.write(`<br> end. <br>`);
