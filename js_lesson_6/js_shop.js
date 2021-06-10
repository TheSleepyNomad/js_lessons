/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
 */
function productGen() {
    function nameGen() {
        const listProductsName = ['Товар1', 'Товар2', 'Товар3', 'Товар4', 'Товар5', 'Товар6'];
        return listProductsName[Math.floor(Math.random() * listProductsName.length)];
    }
    function typeGen() {
        const listProductsType = ['Тип1', 'Тип2', 'Тип3', 'Тип4', 'Тип5', 'Тип6'];
        return listProductsType[Math.floor(Math.random() * listProductsType.length)];
    }
    function descGen() {
        const listProductsDesc = ['Описание товара'];
        return listProductsDesc[Math.floor(Math.random() * listProductsDesc.length)];
    }
    function priceGen() {
        const listProductsPrice = [500, 650, 1250, 550, 5000, 7500, 2200];
        return listProductsPrice[Math.floor(Math.random() * listProductsPrice.length)];
    }
    return {
        productName: nameGen(),
        productType: typeGen(),
        productDesc: descGen(),
        productPrice: priceGen()
    }
}

const catalog = {

    products: [],
    loadProducts(countProducts) {
        for (let i = 0; i < countProducts; i++) {
            this.products.push(productGen())
        }
        return;
    }
    ,
    settings: {
        catalogRoot: document.querySelector('.catalogWrapper'),
        cardClassName: 'catalogWrapper_card',
        cardImageName: 'card_img',
        cardImageSrc: 'img/img1.jpg'
    },
    catGen() {
        for (i of this.products) {
            //Создание блока карточки товара
            const cardRoot = document.createElement('div');
            cardRoot.classList.add(`${catalog.settings.cardClassName}`);
            this.settings.catalogRoot.appendChild(cardRoot);

            //Добавление картинки товара в блок
            const cardImg = document.createElement('IMG');
            cardImg.classList.add(`${catalog.settings.cardImageName}`)
            cardImg.src = this.settings.cardImageSrc;
            cardRoot.appendChild(cardImg)

            //Создание Загаловка, подзаголовка, описания
            //Загаловок
            const cardName = document.createElement('h1');
            cardName.classList.add('card_name')
            cardName.innerText = i.productName;
            cardRoot.appendChild(cardName);
            //Подзаголовок
            const cardSubName = document.createElement('h3');
            cardSubName.classList.add('card_subname')
            cardSubName.innerText = i.productType;
            cardRoot.appendChild(cardSubName);

            //Описание
            const cardDesc = document.createElement('p');
            cardDesc.classList.add('card_description')
            cardDesc.innerText = i.productDesc;
            cardRoot.appendChild(cardDesc)

            //Цена
            const cardPrice = document.createElement('p');
            cardPrice.classList.add('card_price')
            cardPrice.innerText = `${i.productPrice} руб.`;
            cardRoot.appendChild(cardPrice)

            //Создание кнопки
            const cardButton = document.createElement('button');
            cardButton.classList.add('card_button');
            cardButton.classList.add(`b${this.products.indexOf(i)}`);
            cardButton.innerText = 'Купить';
            cardRoot.appendChild(cardButton);


            //Обработчик событий для карточки
            cardRoot.addEventListener('click', bucket.addProduct);
            cardRoot.addEventListener('click', bucket.bucketCheck);
            cardRoot.addEventListener('click', bucket.clearSpace);
        }
    }
}

const bucket = {
    productsInBucket: [],
    settings: {
        catalogRoot: document.querySelector('.bucketWrapper'),
        buttonLayout:
            `<div class="bucketWrapper_buttons">
        <button class="bucket_clear">Очистить корзину</button>
        </div>`,
        bucketDiv: `<div class='bucket_space'></div>`
    },
    init() {
        this.settings.catalogRoot.innerHTML = this.settings.buttonLayout;
        bucket.settings.catalogRoot.insertAdjacentHTML('beforeEnd', bucket.settings.bucketDiv)
        let but_show = document.querySelector(".bucket_show");
        let but_clear = document.querySelector(".bucket_clear");
        but_clear.addEventListener('click', this.bucketClear);
        but_clear.addEventListener('click', this.clearSpace);
        window.onload = this.bucketCheck;
    },
    clearSpace() {
        if (document.querySelectorAll('#message').length > 1) {
            document.getElementById('message').parentNode.removeChild(document.getElementById('message'));
        }
        if (document.querySelectorAll('#prod_list').length > 1) {
            console.log(document.querySelector('#prod_list').parentNode);
            document.querySelector('#prod_list').parentNode.removeChild(document.querySelector('#prod_list'));
        }
    },
    bucketCheck() {

        if (bucket.productsInBucket.length == 0) {
            document.querySelector('.bucket_space')
                .insertAdjacentHTML('beforeend', '<p id="message">Корзина пуста!</p>');
        } else {
            document.querySelector('.bucket_space')
                .insertAdjacentHTML('beforeend', `<p id="message">В корзине ${bucket.productsInBucket.length}шт. товара</p>`);
            let listring = bucket.productsInBucket.map(i => `<li>${i.productName}</li>`).join('');
            let totalPrice = 0;
            for (let i of bucket.productsInBucket) {
                totalPrice += i.productPrice;
            }
            document.querySelector('.bucket_space')
                .insertAdjacentHTML('beforeend', `<ul id="prod_list">${listring}<li>${totalPrice} руб.</li></ul>`);
        }
    },
    bucketClear() {
        bucket.productsInBucket.length = 0;
        if (bucket.productsInBucket.length == 0) {
            document.querySelector('.bucket_space')
                .insertAdjacentHTML('beforeend', '<p id="message">Корзина пуста!</p>');
        }
        if (document.querySelectorAll('#prod_list').length >= 1) {
            console.log(document.querySelector('#prod_list').parentNode);
            document.querySelector('#prod_list').parentNode.removeChild(document.querySelector('#prod_list'));
        }
    },
    addProduct() {

        let crutch = document.querySelector('.card_button').classList[0];//Пришлось сделать костыль
        //Почему не работает конструкция if (event.target.classList[0] == 'card_button')?

        if (event.target.classList[0] == crutch) {
            const str_A = event.target.classList[1];
            bucket.productsInBucket.push(catalog.products[parseInt(str_A[1])]);
            console.log(bucket.productsInBucket);
        }
    }

}
catalog.loadProducts(6)
catalog.catGen();

bucket.init();
console.log(bucket.settings.catalogRoot);