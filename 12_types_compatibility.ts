/**
 * Совместимость типов и Структурная типизация
 *
 * Структурная типизация - проверка типов на основании их структуры
 */


/**
 * Пример на примитивных типах
 */


type sec = number;
type ms = number;

let milliseconds: ms = 1000;

let seconds: sec = milliseconds;
// Нет ошибки несоответствия типов, но есть логическая ошибка











/**
 * Пример структурной типизации для объектов
 */

// Объявим тип Employer и интерфейс Man с одинаковой структурой
type Employer = {
    name: string;
    age: number;
}

interface Man {
    name: string;
    age: number;
}

// присвоим переменной типа Employer некоторое значение
let emp: Employer = {
    name: 'John',
    age: 23,
}

// переменной типа Man можно присвоить значение переменной типа Employer
// т.к структура типов соответствует
const man: Man = emp;





/**
 * Пример интерфейса и класса с одинаковой структурой
 */
class Person {
    name: string = 'John';
    age: number = 34;
}

let p: Man = new Person();
