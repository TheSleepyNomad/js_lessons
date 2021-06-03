/*
3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в 
интернет-магазине актуальна не только для корзины, но и для каталога. 
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
но в разных местах давал возможность вызывать разные методы.
 */

// Я плохо пока понимаю ооп в js, но постараюсь объяснить как я вижу реализацию текущего задания
// Описать базовый класс, его свойства, методы. И если брать пример для корзины, то создать класс потомка, 
// который будет учавствовать в работе с корзиной.
function Product(
    shortName,
    fullName,
    article,
    category,
    description,
    photo,
    count,
    price) {
    this.shortName = shortName;
    this.fullName = fullName;
    this.article = article;
    this.category = category;
    this.description = description;
    this.photo = photo;
    this.count = count;
    this.price = price
}