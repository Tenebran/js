let myString = 'Hello World';
const mySymbol = ['l', 'd'];



function stringFilter(youSting, youSymbol){
   
  youSting = youSting.replace(new RegExp(`[${youSymbol}]`, 'g'), '')

   return youSting
}

myString = stringFilter(myString, mySymbol);


console.log(myString);

