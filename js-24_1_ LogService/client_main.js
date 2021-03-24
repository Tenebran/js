console.log('CLIENT');
// fetch() => xhr + promise

// type: last | first
// fetch('/users?type=first')
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data)
//         document.body.innerHTML += data;
//     });

let search_result, searchBtn;

window.addEventListener('load', () => {
  search_result = document.querySelector('#search_result');
  searchBtn = document.querySelector('#search');
  searchText = document.querySelector('.text');

  search_result.value = 'hello';

  console.log(fetch(`/logs/log`));

  // events
  // searchBtn.addEventListener('click', onSearch);
});

// function onSearch() {
//   const userNameElem = document.querySelector('#userName');

//   fetch(`/users/log`)
//     .then(resp => resp.json())
//     .then(data => {
//       search_result.value = logService.getLog;
//     });
// }
