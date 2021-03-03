function request(options = {}) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4 && options.success) {
      options.success(xhr.responseText);
    }
  });
  xhr.open(options.method, options.url, true);

  xhr.send(JSON.stringify(options.body));
}

window.onload = () => {
  const subButton = document.querySelector('#send__action');
  const inputName = document.querySelector('.login__body__name');
  const inputYear = document.querySelector('.login__body__year');

  subButton.addEventListener('click', event => {
    event.preventDefault();

    const userYear = inputYear.value;
    const userName = inputName.value;
    const date = new Date();
    const userDate = {};
    let useCorrectYear = date.getFullYear() - userYear;

    if (userYear == '' || userName == '') {
      if (userYear == '' && userName == '') {
        inputYear.style.borderColor = '#f3585e';
        inputYear.classList.remove('placeholdergreen');
        inputYear.classList.add('placeholderred');
        inputYear.placeholder = 'Plase Give You Year';
        inputName.style.borderColor = '#f3585e';
        inputName.classList.remove('placeholdergreen');
        inputName.classList.add('placeholderred');
        inputName.placeholder = 'Plase Give You Name';
      } else if (userYear == '') {
        inputYear.style.borderColor = '#f3585e';
        inputYear.classList.remove('placeholdergreen');
        inputYear.classList.add('placeholderred');
        inputYear.placeholder = 'Plase Give You Year';
      } else if (userName == '') {
        inputName.style.borderColor = '#f3585e';
        inputName.classList.remove('placeholdergreen');
        inputName.classList.add('placeholderred');
        inputName.placeholder = 'Plase Give You Name';
      }
    } else if (!/^[a-zA-Z-а-яА-Я]+$/.test(userName)) {
        inputName.style.borderColor = '#f3585e';
        inputName.classList.remove('placeholdergreen');
        inputName.classList.add('placeholderred');
        inputName.placeholder = 'Only Name';
        inputName.value = '';
    }
    else if (useCorrectYear > 120 || useCorrectYear < 0) {
      inputYear.classList.remove('placeholdergreen');
      inputYear.classList.add('placeholderred');
      inputYear.style.borderColor = '#f3585e';
      inputYear.value = '';
      inputYear.placeholder = 'You Year Is Not Correct';
    } else {
      userDate.year = userYear;
      inputName.classList.remove('placeholderred');
      inputYear.classList.add('placeholdergreen');
      inputYear.placeholder = 'Thanks';
      inputYear.style.borderColor = '#4cf37e';
      inputYear.value = '';
      userDate.name = userName;
      inputName.classList.remove('placeholderred');
      inputName.classList.add('placeholdergreen');
      inputName.placeholder = 'Thanks';
      inputName.style.borderColor = '#4cf37e';
      inputName.value = '';
      request({
        method: 'Post',
        body: userDate,
        url: '/user/profil',
      });
      console.log(userDate)
    }
    
  });
 
};
