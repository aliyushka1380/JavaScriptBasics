"use strict";

const catalog = {   //каталог
  catalogListBlock: null,
  cart: {},
  cartImg: 'images/cart.jpg',
  products: [
    {
      id_product: 11,
      product_name: 'САНДАЛЕТЫ',
      price: 4790,
      quantity: 1,
      img: 'images/sandalety.jpg',
    },
    {
      id_product: 22,
      product_name: 'ТАПОЧКИ ДОМАШНИЕ',
      price: 1900,
      quantity: 2,
      img: 'images/tapochki.jpg',
    },
    {
      id_product: 33,
      product_name: 'ПОЛУСАПОЖКИ',
      price: 6890,
      quantity: 3,
      img: 'images/polusapojki.jpg',
    }
  ],

  init(catalogListBlockClass, cart) {   //инициализируем каталог
    this.catalogListBlock = document.querySelector(`.${catalogListBlockClass}`);
    this.cart = cart;
    this.addEventHandlers();
    this.render();
  },

  render() {
    if (this.products.length > 0) {   //рендеринг каталога
      this.renderCatalogList();
    } else {
      this.renderEmptyCatalog();
    }
  },

  renderCatalogList() {   //рендеринг списка товаров
    this.catalogListBlock.innerHTML = '';
    this.products.forEach(good => {
      this.catalogListBlock.insertAdjacentHTML('beforeend', this.renderCataloggood(good));
    });
  },

  renderCataloggood(good) {   //рендеринг товара
    return `<div class="product">
                <img width = "160" height = "200" src="${good.img}">
                <h3><b>Наименование</b>: ${good.product_name}</h3>
                <p><b>Цена за шт.</b>: ${good.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${good.id_product}">Купить</button>
            </div>`;
  },

  addEventHandlers() {   //добавляем в корзину через клик
    this.catalogListBlock.addEventListener('click', event => this.addToBasket(event));
  },

  addToBasket(event) {   //добавление в корзину
    if (!event.target.classList.contains('product__add-to-cart')) return;
    const id_product = +event.target.dataset.id_product;
    this.cart.addToBasket(id_product);
  },

  renderEmptyCatalog() {   //рендеринг каталога без содержания чего-либо
    this.catalogListBlock.innerHTML = '';
    this.catalogListBlock.insertAdjacentHTML('beforeend', `Каталог товаров пуст.`);
  },
};

const cart = {   //корзина
  cartBlock: null,
  clrCartButton: null,
  catalogList: [],
  goods: [
    {
      id_product: '',
      product_name: '',
      price: '',
      quantity: '',
    },
  ],

  init(cartBlockClass, clrCartButton, catalogList) {   //инициальзация корзины
    this.cartBlock = document.querySelector(`.${cartBlockClass}`);
    this.clrCartButton = document.querySelector(`.${clrCartButton}`);
    this.catalogList = catalogList;
    this.goods = [];
    this.addEventHandlers();
    this.render();
  },

  addEventHandlers() {
    this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
  },

  dropCart() {   //очистка корзины
    this.goods = [];
    this.render();
  },

  render() {   //рендеринг корзины
    if (this.getCartGoodsLength() > 0) {
      this.renderCartList();
    } else {
      this.renderEmptyCart();
    }
  },

  findProduct(id_product) {
    return this.catalogList.find(product => product.id_product === id_product);
  },

  addToBasket(id_product) {   //добавляем товар
    const product = this.findProduct(id_product);
    this.goods.push({ ...product });
    this.render();
  },

  getCartGoodsLength() {
    return this.goods.length;
  },

  renderEmptyCart() {   //рендеринг корзины без содержания чего-либо
    this.cartBlock.innerHTML = '';
    this.cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
  },

  renderCartList() {   //рендеринг списка товаров
    this.cartBlock.innerHTML = '';
    this.goods.forEach(good => {
      this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartgood(good));
    });
    this.cartBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(и) стоимостью ${this.getCartPrice()}`);
  },

  getCartPrice() {
    return this.goods.reduce(function (price, goods) {
      return price + goods.price * goods.quantity;
    }, 0);
  },

  renderCartgood(good) {   //рендеринг товара
    return `<div>
                <img width = "160" height = "200" src="${good.img}">
                <h3><b>Наименование</b>: ${good.product_name}</h3>
                <p><b>Цена за шт.</b>: ${good.price} руб.</p>
                <p><b>Количество</b>: ${good.quantity} шт.</p>
                <p><b>Стоимость</b>: ${good.quantity * good.price} руб.</p>
            </div > `;
  },
};

catalog.init('catalog', cart);
cart.init('cart', 'cart-btn', catalog.products);
