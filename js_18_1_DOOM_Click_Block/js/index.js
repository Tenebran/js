window.addEventListener('load', () => {
  const defaultColor = 'rgb(34, 226, 108)';
  let block = {
    1: {
      count: 0,
      color: defaultColor,
      blockId: 1,
    },
    2: {
      count: 0,
      color: defaultColor,
      blockId: 2,
    },
  };

  let blockContain = document.querySelector('.block_contain');
  let blockWrapper = document.querySelector('.block-wrapper');
  let blockSet = document.querySelector('.block-button__setting');

  if (localStorage.btnClickCount) {
    block = JSON.parse(localStorage.btnClickCount);
  }

  for (let key in block) {
    blockContain.innerHTML += `<div class="block" data-click-id="${block[key]['blockId']}" style="background: ${block[key]['color']}">
    <div class="block_counter" data-click-id="${key}">${block[key]['count']}</div>
    <div class="block-button_block">
      <button class="block_click block_button" data-click-id="${key}">Click</button>
    </div>
  </div>`;

    blockSet.innerHTML = `<button class="block_clear button-setting__style">Clear</button>
    <button class="block_set button-setting__style"  data-click-id="${key}">Set</button>`;
  }

  blockWrapper.addEventListener('click', event => {
    let clickId = event.target.dataset['clickId'];
    let colorChanger = '';

    if (event.target.className == 'block_click block_button') {
      if (block[clickId]['count'] === 0) {
        block[clickId]['count']++;
        block[clickId]['color'] = colorGen();
      } else if (block[clickId]['count'] > 0 && block[clickId]['count'] < 49) {
        block[clickId]['count']++;
        block[clickId]['color'] = colorGen();
      } else if (block[clickId]['count'] >= 49) {
        block[clickId]['count']++;
        block[clickId]['color'] = defaultColor;
      } else {
        block[clickId]['count']++;
      }
    } else if (event.target.className == 'block_clear button-setting__style') {
      for (key in block) {
        block[key]['count'] = 0;
        block[key]['color'] = defaultColor;
      }
    } else if (event.target.className == 'block_set button-setting__style') {
      let userId = +prompt('Enter Block Number "For example 1 or 2"');
      let userNumber = +prompt('Enter the number');
      for (key in block) {
        if (block[key]['blockId'] == userId) {
          block[key]['count'] = userNumber;
          if (block[key]['count'] <= 49) {
            block[key]['color'] = colorGen();
          } else {
            block[key]['color'] = defaultColor;
          }
        }
      }
    }

    blockContain.innerHTML = '';
    for (let key in block) {
      blockContain.innerHTML += `<div class="block" style="background: ${block[key]['color']} ">
        <div class="block_counter" data-click-id="${key}">${block[key]['count']}</div>
        <div class="block-button_block">
          <button class="block_click block_button" data-click-id="${key}">Click</button>
        </div>
      </div>`;
    }

    localStorage.btnClickCount = JSON.stringify(block);
  });

  function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
});
