/**
 * Совместимость типов и Структурная типизация
 *
 * Структурная типизация - проверка типов на основании их структуры
 */



interface Named {
    name: string;
}

class Person {
    name: string = '';
}

let p: Named;
p = new Person();





