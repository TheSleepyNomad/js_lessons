/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */
// Можно заменить двумя объектами - карточка товара и корзина
function ProductCard(name, description, count, price) {
    this.name = name; // название товара
    this.description = description; // описание
    this.count = count; // количество
    this.price = price; // цена
}
function Bucket() {
    this.products = []; //товар, помещенный в корзину
    this.sum = 0;
    this.addProduct = function (card) {
        this.products.push(card);
    }
    this.countBasketPrice = function () {
        if (this.products.length === 0) {
            return 'Корзина пуста'
        }
        for (let i of this.products) {
            this.sum += i.price;
        }
        return this.sum;
    }
}
let newProduct_1 = new ProductCard('product_1', 'some desc', 5, 500);
let newProduct_2 = new ProductCard('product_2', 'some desc', 18, 1500);
let newProduct_3 = new ProductCard('product_3', 'some desc', 23, 2500);
let newProduct_4 = new ProductCard('product_4', 'some desc', 10, 7500);
let newProduct_5 = new ProductCard('product_5', 'some desc', 1, 5000);

let newBucket = new Bucket();
newBucket.addProduct(newProduct_1);
newBucket.addProduct(newProduct_4);
console.log(newBucket.countBasketPrice());
