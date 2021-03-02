let y = +prompt("Введите первое число");
let x = +prompt("Введите второе число");
let znak = +prompt("Введите 1 если +, 2 -, 3 *, 4 /, 5 %, 6 ^" );


function doMath(number1 , calculateOperator, number2){
   let result;
   if(calculateOperator === 1){
       result = number1 + number2;
   } else if(calculateOperator === 2){
       result = number1 - number2;
   } else if(calculateOperator === 3){
       result = number1 * number2;
   } else if(calculateOperator === 4){
       result = number1 / number2;
   } else if(calculateOperator === 5){
       result = number1 % number2
   } else if(calculateOperator === 6){
       result = number1 ^ number2
   } else{
       result = "Вы ввели неправильное значение!!!!"
   }
   return result
   }

   alert(doMath(y, znak, x));
