/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */
let userNum = prompt('Enter some num from 0 to 999: ');
function NumInObg(userNum) {
    let intUserNum = parseInt(userNum);
    let obj = {};
    if (intUserNum > 999) {
        console.log('Enter num > 999!!!')
        return obj;
    }
    switch (userNum.length) {
        case 1:
            obj['units'] = +userNum[0];
            return obj;
            break;
        case 2:
            obj['units'] = +userNum[0];
            obj['tens'] = +userNum[1];
            return obj;
            break;
        case 3:
            obj['units'] = +userNum[0];
            obj['tens'] = +userNum[1];
            obj['hundreds'] = +userNum[2];
            return obj;
            break;
    }
}
console.log(NumInObg(userNum));