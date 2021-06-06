/*
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

// Создаем шахматную достку
function drawChess() {
    //Создаем таблицу
    var table = document.createElement("table");
    letString = 'ABCDEFGH';
    for (var i = 1; i <= 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j < 9; j++) {
            var td = document.createElement('td');
            if (i < 2 || i == 10) {
                td.innerText = letString[j - 1]
                tr.appendChild(td);
            } else {
                if (i % 2 == j % 2) {
                    td.className = "white";
                } else {
                    td.className = "black";
                }
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    document.querySelector('.chess').appendChild(table);

    //Редактируем стили ячеек
    let blackCell = document.querySelectorAll('.black');
    let whiteCell = document.querySelectorAll('.white');
    for (let cell of whiteCell) {
        cell.style.width = '10px';
        cell.style.height = '10px';
        cell.style.border = "1px solid black";
    }
    for (let cell of blackCell) {
        cell.style.width = '10px';
        cell.style.height = '10px';
        cell.style.border = "1px solid black";
        cell.style.background = 'black';
    }

    //Добавляем 1-8 по бокам таблицы
    //Левая сторона
    let table1 = document.querySelector('table');
    let arrTable = Array.from(table1.rows);
    for (let i = 0; i < 10; i++) {
        var td = document.createElement('td');
        if (i == 0 || i == 9) {
            td.innerText = ' ';
        } else {
            td.innerText = i;
        }
        arrTable[i].insertBefore(td, arrTable[i].firstChild);

    }
    //Правая
    for (let i = 0; i < 10; i++) {
        var td = document.createElement('td');
        if (i == 0 || i == 9) {
            td.innerText = ' ';
        } else {
            td.innerText = i;
        }
        arrTable[i].lastChild.parentNode.insertBefore(td, arrTable[i].lastChild.nextSibling);
    }
}
drawChess();