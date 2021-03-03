window.onload = () => {
  const userInput = document.querySelector('.my-input');
  const wrapperApp = document.querySelector('.wrapper');

  const data = [];

  const inputUserText = new Promise(function (resolve) {
    wrapperApp.addEventListener('keypress', event => {
      const secondTimer = 1000;

      if (event.code == 'Enter' && userInput.readOnly == false) {
        userInput.readOnly = 'readonly';
        userInput.style.backgroundColor = 'grey';
        data.push(userInput.value);
        setTimeout(() => {
          userInput.value = '';
          userInput.style.backgroundColor = '#fff';
          userInput.readOnly = '';
          resolve(data);
        }, secondTimer);
      }
    });
  });

  inputUserText
    .then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data);
        }, 10000);
      });
    })
    .then(value => {
      if (!!value) {
        userInput.disabled = true;
        wrapperApp.style.background = 'red';
        userInput.value = '';
        console.log(value);
      }
    });
};
