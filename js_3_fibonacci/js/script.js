let fibo = +prompt('Введите число n');

function fibonacci(fibo) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= fibo; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

let fiboResult = fibonacci(fibo);

function prime(fiboResult) {
  for (let i = 2; i < fiboResult; i++) {
    if (fiboResult % i === 0) {
      return false;
    }
  }
  return fiboResult > 1;
}

let finalPrimeNumber;

if (prime(fiboResult) === false) {
  finalPrimeNumber = 'это не простое число';
} else if (prime(fiboResult) === true) {
  finalPrimeNumber = 'это простое число';
}

alert(`Число Фибоначчи равно ${fiboResult} и  ${finalPrimeNumber} `);
