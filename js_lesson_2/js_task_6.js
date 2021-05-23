/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/
console.log('Запуск шестого задания');
//function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
function mathOperation(arg) {
    switch (arg.operation) {
        case 'сложение':
            return arg.arg1 + arg.arg2;
        case 'вычитание':
            return arg.arg1 - arg.arg2;
        case 'умножение':
            return arg.arg1 * arg.arg2;
    }
}

console.log(mathOperation({ arg1: 12, arg2: 20, operation: 'сложение' }))
console.log(mathOperation({ arg1: 10, arg2: 5, operation: 'вычитание' }))
console.log(mathOperation({ arg1: 10, arg2: 10, operation: 'умножение' }))
