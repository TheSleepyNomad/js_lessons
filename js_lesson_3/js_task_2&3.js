/*
    С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
    Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

    Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
console.log('-------------- Задание №2/3 --------------');

//Вариант №1
var tradeBasket = new Map();
tradeBasket.set('Телефон', 2000).set('Шоколадка', 500).set('Игрушка', 1000);

function countBasketPrice() {
    var basketSum = 0;
    for (var value of tradeBasket.values()) {
        basketSum += value;
    }
    return basketSum;
}
console.log(`Стоимость всех товаров в корзине ${countBasketPrice()} рублей`);

//Вариант №2
var tradeBasket_v2 = [
    {
        product: "Телефон",
        price: 10000
    },
    {
        product: "Шоколадка",
        price: 50
    },
    {
        product: "Игрушка",
        price: 4500
    }];
function countBasketPrice_v2(basket) {
    var basketSum = 0;
    for (let prod of basket) {
        basketSum += prod.price;
    }
    return basketSum;
}
console.log(`Стоимость всех товаров в корзине ${countBasketPrice_v2(tradeBasket_v2)} рублей`);