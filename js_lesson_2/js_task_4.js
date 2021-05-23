//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
console.log('Запуск четвертого задания');

var a = Math.floor(Math.random() * (15 - 0)) + 0;

switch (a) {
    default:
        for (var i = a; i <= 15; i++) {
            console.log(i);
        }
}