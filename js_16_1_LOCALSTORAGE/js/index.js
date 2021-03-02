window.addEventListener('load', () => {
  let products = {
    'id-1': {
      name: 'Apple Grade First',
      price: 12,
      quantity: 20,
      className: 'number1',
      img: 'https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },

    'id-2': {
      name: 'Apple Grade Second',
      price: 15,
      quantity: 10,
      className: 'number2',
      img: './img/img/259bf01a21afbbc61d306403c275fb20.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },

    'id-3': {
      name: 'Apple Third Sotr',
      price: 10,
      quantity: 50,
      className: 'number3',
      img: 'https://abekker.ru/uploads/products/yabloko-grusha-golden-delishes4.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },

    'id-4': {
      name: 'Apple Fourth Comp',
      price: 7,
      quantity: 20,
      className: 'number4',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9UpxFZ46r-kMhe_3X51b3anr81neMJGmDA&usqp=CAU',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },
    'id-5': {
      name: 'Apple Fifth Comp',
      price: 38,
      quantity: 80,
      className: 'number5',
      img:
        'https://thumbs.dreamstime.com/b/один-желтый-яблоко-на-белом-изолировано-apple-фоне-157410035.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },
    'id-6': {
      name: 'Apple Sixth Comp',
      price: 46,
      quantity: 40,
      className: 'number6',
      img:
        'https://freshfood.com.ua/content/images/50/600x600l80nn0/yabloko-mutsu-mutsu-kg-40514302038026.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },
    'id-7': {
      name: 'Apple Seventh Sotr',
      price: 54,
      quantity: 26,
      className: 'number7',
      img: 'https://image.freepik.com/free-photo/green-apple-with-leaves_1101-453.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },
    'id-8': {
      name: 'Apple Eighth Sotr',
      price: 10,
      quantity: 50,
      className: 'number8',
      img:
        'https://img.freepik.com/free-photo/fresh-apple-isolated-on-white-closeup_169016-3915.jpg?size=626&ext=jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },
    'id-9': {
      name: 'Apple Ninth Comp',
      price: 60,
      quantity: 48,
      className: 'number9',
      img:
        'https://resizer.mail.ru/p/e126c855-9c45-5ed4-912c-d51db153cca7/AAAcdwghSvnxvfaF6cmdaCncH7Xduqd0PlBNkmoallSKgwmZgRCz25DD8uJlT7yqJTv8XWC1zDZHepJaAJWhNA8UGaE.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },
    'id-10': {
      name: 'Apple Tenth Comp',
      price: 80,
      quantity: 70,
      className: 'number10',
      img: 'https://cdn1.img.inosmi.ru/images/24692/18/246921802.jpg',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum velit non sunt
      maxime voluptates laborum itaque modi sed incidunt perspiciatis ea ipsum debitis quis
      aspernatur qui, temporibus commodi animi?`,
    },
  };

  const productsContainer = document.querySelector('.products');
  const shopCartOut = document.querySelector('.title2');
  const wrapper = document.querySelector('.wrapper');
  let currency = '';

  for (let key in products) {
    productsContainer.innerHTML += ` 
        <li class="products__list">
        <img
          src="${products[key]['img']}"
          alt="App"
          class="products__img"
        />
        <h3 class="products__title">${products[key]['name']}</h3>
        <p class="products__text"> ${products[key]['text']}

        </p>
        <div class="products__button__info">
        <div class="material-icons products__button__icon">info</div>
        <div class="products__button__content">В наличии: ${products[key]['quantity']}шт. <br> Цена: ${products[key]['price']}UAH</div>
       
      </div>
        <button class="products__button" data-products-id="${key}">Buy</button>

       
      </li>`;
  }

  let data = {};

  if (localStorage.btnClickTracker) {
    data = JSON.parse(localStorage.btnClickTracker);
  }

  wrapper.addEventListener('click', function (event) {
    if (event.target.className == 'products__button') {
      let productsId = event.target.dataset['productsId'];
      if (data[productsId] !== undefined) {
        if (data[productsId]['count'] < data[productsId]['quantity']) {
          data[productsId]['count']++;
        } else {
          data[productsId]['count'] = data[productsId]['quantity'];
        }
      } else {
        data[productsId] = products[productsId];
        data[productsId]['count'] = 1;
      }
    }

    localStorage.btnClickTracker = JSON.stringify(data);

    if (localStorage.btnClickTracker) {
      shopCartOut.innerHTML = '';

      shopCartOut.innerHTML += shopCart.render(currency);
    }
  });

  class Cart {
    constructor(
      items,
      cartClass = 'cart',
      plusClass = 'plus',
      minusClass = 'minus',
      deleteClass = 'delete',
      deleteAllClass = 'deleteAll',
      currencyClassUAH = 'UAH',
      currencyClassUSD = 'USD',
      currencyClassEUR = 'EUR'
    ) {
      this.items = items;
      this.plusClass = plusClass;
      this.minusClass = minusClass;
      this.deleteClass = deleteClass;
      this.cartClass = cartClass;
      this.currencyClassUAH = currencyClassUAH;
      this.currencyClassUSD = currencyClassUSD;
      this.currencyClassEUR = currencyClassEUR;
      this.deleteAllClass = deleteAllClass;
    }
    productsPlus(products) {
      if (this.items[products]['count'] < this.items[products]['quantity'])
        this.items[products]['count']++;
    }
    productsMinus(products) {
      if (this.items[products]['count'] - 1 == 0) {
        this.productsDelete(products);
      } else {
        this.items[products]['count']--;
      }
    }
    productsDelete(products) {
      delete this.items[products];
    }

    productsDeleteAll() {
      for (let key in this.items) {
        delete this.items[key];
      }
    }

    render(currency) {
      let mytext = `<div class="cart__none"> <div class="cart__none__text material-icons"> YOU CART EMPTY
      sentiment_dissatisfied
      
      </div> <div class="cart__none__img">  
      </div>  <div class="cart__none__final"> Check out our store</div></div>
     `;
      let total = 0;
      for (let key in this.items) {
        if (!!this.items[key]) {
          total = 0;
          for (let key in this.items) {
            total += this.items[key]['count'] * this.items[key]['price'];
          }

          mytext = `<div class="total"> <div class="total__sum">Your Purchase Amount <span class="total__sum__number">${total}</span> </div>
      <div class="total__currency">
      <button class="total__currency__val ${shopCart.currencyClassUAH}" style="background-color: rgb(27, 65, 114); color: #fff;">UAH</button>
      <button class="total__currency__val ${shopCart.currencyClassEUR}">EUR</button>
      <button class="total__currency__val ${shopCart.currencyClassUSD}">USD</button>

    </div>  </div>`;

          if (currency == 'EUR') {
            total = 0;
            for (let key in this.items) {
              total += (this.items[key]['count'] * this.items[key]['price']) / 32;
              mytext = `<div class="total"> <div class="total__sum">
              Your Purchase Amount <span class="total__sum__number">${total.toFixed(2)}
          </span> </div>
          <div class="total__currency">
          <button class="total__currency__val ${shopCart.currencyClassUAH}" >UAH</button>
          <button class="total__currency__val ${
            shopCart.currencyClassEUR
          }" style="background-color: rgb(27, 65, 114); color: #fff;">EUR</button>
          <button class="total__currency__val ${shopCart.currencyClassUSD}">USD</button>
    
        </div>  </div>`;
            }
          } else if (currency == 'USD') {
            total = 0;
            for (let key in this.items) {
              total += (this.items[key]['count'] * this.items[key]['price']) / 25;
              mytext = `<div class="total"> <div class="total__sum">
              Your Purchase Amount <span class="total__sum__number">${total.toFixed(2)}
          </span> </div>
          <div class="total__currency">
          <button class="total__currency__val ${shopCart.currencyClassUAH}" >UAH</button>
          <button class="total__currency__val ${shopCart.currencyClassEUR}">EUR</button>
          <button class="total__currency__val ${
            shopCart.currencyClassUSD
          }" style="background-color: rgb(27, 65, 114); color: #fff;">USD</button>
    
        </div>  </div>`;
            }
          } else if (currency == 'UAH') {
            total = 0;
            for (let key in this.items) {
              total += this.items[key]['count'] * this.items[key]['price'];
            }
          } else {
            total = 0;
            for (let key in this.items) {
              total += this.items[key]['count'] * this.items[key]['price'];
            }
          }

          for (let key in this.items) {
            let goods = this.items[key];
            let myQuantity = goods['quantity'];
            myQuantity -= goods['count'];

            mytext += `<li class="products__list">
        <img
          src= ${goods['img']}
          alt="Apple"
          class="products__img"
        />
        <h3 class="products__title">You want to buy</h3>
        <p class="products__text">  ${shopCart.items[key]['name']} .
        </p>
        <div class="products__button__info">
        <div class="material-icons products__button__icon">info</div>
        <div class="products__button__content">Still In Stock ${myQuantity}PCS.</div>
      </div>
        <div class="cart__button__wrapper">
        <button class="${shopCart.minusClass}"  data-products-id="${[key]}" >-</button>
        <input type="text" readonly class="input__cart" value="${this.items[key]['count']}">
        <button class="${shopCart.plusClass}" data-products-id="${[key]}">+</button>
      </div>

        <div class="products__button__info">
          <button class="${shopCart.deleteClass}" data-products-id="${[key]}">Remove</button>
          </li>`;
          }

          mytext += ` <div class="cart__res">
        <button class="${shopCart.deleteAllClass}" >Remove All</button> </div>`;
        }
      }
      return mytext;
    }
  }

  let shopCart = new Cart(data);

  if (localStorage.btnClickTracker) {
    shopCartOut.innerHTML = '';
    shopCartOut.innerHTML += shopCart.render(currency);
  }

  shopCartOut.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('delete')) {
      shopCart.productsDelete(target.dataset['productsId']);

      return true;
    } else if (target.classList.contains('plus')) {
      shopCart.productsPlus(target.dataset['productsId']);

      return true;
    } else if (target.classList.contains('minus')) {
      shopCart.productsMinus(target.dataset['productsId']);

      return true;
    } else if (target.classList.contains('EUR')) {
      currency = 'EUR';

      return currency;
    } else if (target.classList.contains('UAH')) {
      currency = 'UAH';

      event.target.style.backgroundColor = 'red';

      return currency;
    } else if (target.classList.contains('USD')) {
      currency = 'USD';
      return currency;
    } else if (target.classList.contains('deleteAll')) {
      shopCart.productsDeleteAll();
      shopCartOut.innerHTML = shopCart.render(currency);
    }
  });
});
