/**
 * Совместимость типов и Структурная типизация
 *
 * Структурная типизация - проверка типов на основании их структуры
 */


/**
 * Пример на примитивных типах
 */


type FirstString = string;
type SecondString = string;

let str1: FirstString = 'hey!';
let str2: SecondString = 'ho!';

// Типы переменных имеют разное название но одинаковую структуру
str1 = str2;






/**
 * Пример интерфейса и класса с одинаковой структурой
 */

interface Named {
    name: string;
}

class Person {
    name: string = 'Alex';
}

let p: Named;
p = new Person();





