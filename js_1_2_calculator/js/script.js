let a = prompt('Enter the first number');
let b = prompt('Enter the second number');
let c = prompt('Enter the third number');

let userNumberA = parseInt(a);
let userNumberB = parseInt(b);
let userNumberC = parseInt(c);

alert(userNumberA + userNumberB + userNumberC);

let myNumberA = userNumberA % 2;
let myNumberB = userNumberB % 2;
let myNumberC = userNumberC % 2;

if (myNumberA == 0) {
  console.log('The first number is even!');
} else if (myNumberA == 1) {
  console.log('The first number is odd!!');
}

if (myNumberB == 0) {
  console.log('The second number is even!');
} else if (myNumberB == 1) {
  console.log('The second number is odd!');
}

if (myNumberC == 0) {
  console.log('The third number is even!');
} else if (myNumberC == 1) {
  console.log('The third number is odd!');
}
