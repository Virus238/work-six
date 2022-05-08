/*
let num = prompt ('Виведіть число 22 або 33', '');

if (num >= 22 && num <= 33) {
    alert (num);
} else {
    alert ('перемінна вказана невірно');
}
*/

let userName = prompt ('Ведіть логін', '');


if (userName === 'AdminUser') {
    let pass = prompt ('Ведіть пароль', '');

    if (pass === 'admin123') {
        alert ('Ви увійшли до системи');
    } else if (pass === '' || pass === null) {
        alert ('Невірний формат');
    } else {
        alert ('Невірний пароль');
    }

} else if (userName === '' || userName === null) {
    alert ('Невірний формат');
} else {
    alert ('Такого користувача не знайдено');
}