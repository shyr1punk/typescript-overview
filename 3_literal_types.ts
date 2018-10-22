/**
 * Литеральные типы
 *
 * Позволяют описывать точные значения типа
 */



/**
 * Строковый литеральный тип и объединение типов
 */
let favoriteLang: 'javascript' | 'typescript';

// Можно присвоить только значения из объединения
// typescript подсказываем возможные значения и не даёт ввести неправильное
// favoriteLang =





/**
 * Числовой литеральный тип
 */

let dice: 1 | 2 | 3 | 4 | 5 | 6 = 3;








// так как значения const нельзя изменять, переменная имеет выведенный литеральный тип
const favoriteCompany = 'yandex';
const literalNumber = 6;
const literalBoolean = false;

let explicitFalse: false;
explicitFalse = false;
// explicitFalse = true;
// ^^^^^^^^^^^^^^^^^^^^^ ошибка


