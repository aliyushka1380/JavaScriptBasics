const cartSettings = {
    render(good) {
        return `<div class="good" id=${good.id_product}>
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div class="count">
                    <div class="number">Количество: ${good.quantity}</div>
                    <button class="minus">-</button>
                    <button class="plus">+</button>
                    </div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const shopBasket = {
    cartListBlock: null,
    cartButton: null,
    cartSettings,
    products: [
        {
            id_product: 1,
            name: 'Туфли',
            price: 200,
            quantity: 1,
        },
        {
            id_product: 2,
            name: 'Блузка',
            price: 600,
            quantity: 1,
        },
        {
            id_product: 3,
            name: 'Куртка',
            price: 500,
            quantity: 1,
        },

    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();

    },
    render() {
        if (this.products.length) {
            this.products.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartSettings.render(good));

                const goodDiv = document.querySelector(`#${CSS.escape(good.id_product)}`);

                goodDiv.addEventListener('click', (event) => {
                    if (!event.target.classList.contains('plus') && !event.target.classList.contains('minus')) {
                        return;
                    } else if (event.target.classList.contains('plus')) {
                        good.quantity++;
                        console.log('ID: ', good.id_product, 'Quantity: ', good.quantity);
                        const quantityDiv = event.target.previousSibling.previousSibling.previousSibling.previousSibling;
                        console.log(quantityDiv);
                        quantityDiv.innerText = `Количество: ${good.quantity}`;

                    } else if (event.target.classList.contains('minus')) {
                        if (good.quantity == 0) {
                            good.quantity == 0;
                        } else {
                            good.quantity--;
                            console.log('ID: ', good.id_product, 'Quantity: ', good.quantity);
                            const quantityDiv = event.target.previousSibling.previousSibling;
                            console.log(quantityDiv);
                            quantityDiv.innerText = `Количество: ${good.quantity}`;
                        }
                    }

                    const cartDiv = document.querySelector('#cartid');
                    cartDiv.innerText = `В корзине ${this.products.length} позиций(а) стоимостью ${this.getCartPrice()}`;
                });
            });

            const cartDiv = document.createElement('div');
            cartDiv.id = 'cartid';
            cartDiv.innerText = `В корзине ${this.products.length} позиций(а) стоимостью ${this.getCartPrice()}`;

            this.cartListBlock.appendChild(cartDiv);

        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.products.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.products = [];
        this.render();
    },

};

shopBasket.init();