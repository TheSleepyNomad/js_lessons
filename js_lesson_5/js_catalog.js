
function randomPrice() {
    return Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
}
function randomName() {
    var nameArray = ['Телефон', 'Карты', 'Книга', 'Компьютер', 'Овощи', 'Фрукты', 'Одежда', 'Видеокарта'];
    return nameArray[Math.floor(Math.random() * nameArray.length)];
}
function genProduct() {
    return {
        name: randomName(), // название товара
        description: 'Lorem ipsum dolor sit amet',
        price: randomPrice() // цена
    }
}

document.getElementById('catalog').insertAdjacentHTML('afterbegin', '<h1>Каталог магазина</h1>')

//Генерируем каталог
let product = [];
for (let i = 0; i < 5; i++) {
    product.push(genProduct())
}
//Разбиваем объект на массивы
let nameString = product.map(i => `<p>${i.name}</p>`);
let descString = product.map(i => `<p>${i.description}</p>`);
let priceString = product.map(i => `<p>${i.price} руб.</p>`);
//Добавляем блочные элементы в разметку - формируем каталог
let cat = [];
for (let x in product) {
    cat.push(document.getElementById('catalog').insertAdjacentHTML('beforeend', `<div>${nameString[x]}${descString[x]}${priceString[x]}</div><hr>`))
}
//Дебаг
console.log(nameString);