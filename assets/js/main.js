'use strict';
// задание 1
let p = prompt('Стоимость товара');
let c = prompt('Количетсво денег клиента');

if (p < 0 && c < 0) {
    alert("ответ не может быть отрицательным");
    isNum(num);
}
if (p == c) {
    alert('покупка совершенна успешно')
} else if (p > c) {
    let dg = p - с;
    alert(`Для покупки не хватает ${dg} ₽.`)
} else {
    let dg2 = c - p;
    alert(`Покупка совершена успешно. Сдача ${dg2} ₽.`)
}

// задание 2
let num = Number(prompt('введите число'));
if (num > 0) {
    alert(1)
} else if (num < 0) {
    alert(-1)
} else if (num = 0) {
    alert(0)
}

// задание 3
let a = Number(prompt('1 число'));
let b = Number(prompt('2 число'));
let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result)

//задание 4
let login = prompt("Ваша должность");
let message = (login == 'Админ') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
alert(message)

//задание 5
let logi = prompt('Введите логин');

if (logi === 'Админ') {
    let pas = prompt('Введите пароль');

    if (pas === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pas === '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (logi === '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
