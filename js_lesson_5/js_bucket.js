/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/


function randomPrice() {
    //Генерируем рандомное число - это наша цена
    return Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
}
function randomName() {
    //Случайное имя товара
    var nameArray = ['Телефон', 'Карты', 'Книга', 'Компьютер', 'Овощи', 'Фрукты', 'Одежда', 'Видеокарта'];
    return nameArray[Math.floor(Math.random() * nameArray.length)];
}
function productCard() {
    //Создаем объект товар(карточка товара)
    return {
        name: randomName(), // название товара
        price: randomPrice() // цена
    }
}


//Создаем объект - корзина
let tradeBucket = {
    productArray: [],

    //Метод проверки на наличие товара в корзине
    сheckBucket() {
        if (this.productArray.length == 0) {
            document.querySelector('.bucket').insertAdjacentHTML('beforeend', '<p id="message">Корзина пуста!</p>');
        } else {
            document.querySelector('.bucket').insertAdjacentHTML('beforeend', `<p id="message">В корзине ${this.productArray.length}шт. товара</p>`);
            let listring = this.productArray.map(i => `<li>${i.name}</li>`).join('');
            sumPrice = 0;
            for (let i of this.productArray) {
                sumPrice += i.price;
            }
            document.querySelector('.bucket').insertAdjacentHTML('beforeend', `<div class="card_list" <ul>${listring}</ul><p>Сумма всех товаров ${sumPrice} руб.</p></div>`);
        }
    },
    //Метод добавления товара
    addProduct(product) {
        this.productArray.push(product)
    }

}


//Функция для очистки HTML разметки от лишних элементов
function pageClean() {
    if (document.querySelectorAll('#message').length > 1) {
        document.getElementById('message').parentNode.removeChild(document.getElementById('message'));
    }
    if (document.querySelectorAll('.card_list').length > 1) {
        console.log(document.querySelector('.card_list').parentNode);
        document.querySelector('.card_list').parentNode.removeChild(document.querySelector('.card_list'));
    }
}
//Добавляем функцию очистки, чтобы при следующем нажатии на кнопку была удалена предыдущая запись
document.querySelector('.chck').addEventListener('click', pageClean);
document.querySelector('.addTrade').addEventListener('click', pageClean);