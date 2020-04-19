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
// typescript подсказывает возможные значения и не даёт ввести неправильное
favoriteLang = "";








/**
 * Числовой литеральный тип
 */

let dice: 1 | 2 | 3 | 4 | 5 | 6 = 3;


/** можно присвоить значение из объединения */
dice = 4;

/** нельзя присвоить выходящее за рамки объединения */
dice = 7;







/**
 * Псевдонимы типов - Type alias
 *
 * Псевдонимы типов можно создавать с помощью ключевого слова type
 */


// Алиасы (псевдонимы) примитивных типов и их пересечений
type myString = string;
type stringOrNumber = string | number;


let str: myString;
let strOrNum: stringOrNumber;

str = 'str';
strOrNum = 1;
strOrNum = 'string';







/**
 * Алиасы (псевдонимы) литеральных типов
 */





type typescript = 'typescript';
type one = 1;






/**
 * Псевдоним типа для объекта
 */

type Car = {
    model: string;
    wheels: number;
    speed: number;
}

let car: Car = {
    model: 'Prius',
    wheels: 4,
    speed: 200,
}
