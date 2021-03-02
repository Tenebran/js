window.addEventListener('load', function () {
  let myRange = document.querySelector('.range');
  let myNumber = document.querySelector('.number');
  let blockRed = document.querySelector('.block__red');
  let blockGreen = document.querySelector('.block__green');
  let result = document.querySelector('.result');

  myRange.addEventListener('input', event => {
    myNumber.value = myRange.value;
    blockGreen.style.height = myRange.value + 'px';

    let rangeResult = 0;
    if (myRange.value < 20) {
      rangeResult = (myRange.value / 100) * 2;
    } else if (myRange.value <= 50) {
      rangeResult = (myRange.value / 100) * 4;
    } else if (myRange.value <= 75) {
      rangeResult = (myRange.value / 100) * 6;
    } else {
      rangeResult = (myRange.value / 100) * 8;
    }
    blockRed.style.height = rangeResult + 'px';

    result.innerHTML = `Your amount is ${
      myRange.value
    } . And your commission on the amount is ${rangeResult.toFixed(2)} `;
  });

  myNumber.addEventListener('input', event => {
    myRange.value = myNumber.value;
    blockGreen.style.height = myNumber.value + 'px';
    blockRed.style.height = (myNumber.value / 100) * 8 + 'px';

    if (myNumber.value < 0) {
      myNumber.value = 0;
    }

    if (myNumber.value === '') {
      blockGreen.style.height = '0px';
      blockRed.style.height = '0px';
    }

    let rangeResult = 0;
    if (myNumber.value < 20) {
      rangeResult = (myNumber.value / 100) * 2;
    } else if (myNumber.value <= 50) {
      rangeResult = (myNumber.value / 100) * 4;
    } else if (myNumber.value <= 75) {
      rangeResult = (myNumber.value / 100) * 6;
    } else if (myNumber.value > 100) {
      myNumber.value = 100;
      rangeResult = (myNumber.value / 100) * 8;
    } else if (myNumber < 0) {
      myNumber = 0;
    } else {
      rangeResult = (myNumber.value / 100) * 8;
    }
    blockRed.style.height = rangeResult + 'px';

    result.innerHTML = `Your amount is ${
      myNumber.value
    } .And your commission on the amount is ${rangeResult.toFixed(2)} `;
  });
});
