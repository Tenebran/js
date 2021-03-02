let myArrayLength = 10;
let a = [];
let b = [];

a.length = myArrayLength;
b.length = myArrayLength;

function numberRandom(a) {
  let myNumber;

  for (i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * 20);
  }
  return myNumber;
}

numberRandom(b);
numberRandom(a);

let c = a.filter(x => b.includes(x));
console.log(`Have an array of numbers ${a} and ${b} there are the same numbers ${c}`);
