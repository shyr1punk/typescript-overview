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
 * Другой пример
 */

type sec = number;
type ms = number;

let seconds: sec = 1;
let milliseconds: ms = 1000;

// seconds = milliseconds;
// Будет ли ошибка?






/**
 * Nominal typing
 */

// https://github.com/microsoft/TypeScript/pull/33038
// Nominal `unique type` brands


// type NormalizedPath = unique string;
// type AbsolutePath = unique string;
// type NormalizedAbsolutePath = NormalizedPath & AbsolutePath;

// declare function isNormalizedPath(x: string): x is NormalizedPath;
// declare function isAbsolutePath(x: string): x is AbsolutePath;
// declare function consumeNormalizedAbsolutePath(x: NormalizedAbsolutePath): void;


// const p = "/a/b/c";
// if (isNormalizedPath(p)) {
//     if (isAbsolutePath(p)) {
//         consumeNormalizedAbsolutePath(p);
//     }
// }




// https://github.com/microsoft/TypeScript/pull/33290
// Structural `tag type` brands


// type NormalizedPath = string & tag {NormalizedPath: void};
// type AbsolutePath = string & tag {AbsolutePath: void};
// type NormalizedAbsolutePath = NormalizedPath & AbsolutePath;

// declare function isNormalizedPath(x: string): x is NormalizedPath;
// declare function isAbsolutePath(x: string): x is AbsolutePath;
// declare function consumeNormalizedAbsolutePath(x: NormalizedAbsolutePath): void;


// const p = "/a/b/c";
// if (isNormalizedPath(p)) {
//     if (isAbsolutePath(p)) {
//         consumeNormalizedAbsolutePath(p);
//     }
// }

// type NormalizedPath = string & Tag<"NormalizedPath">;
// type AbsolutePath = string & Tag<"AbsolutePath">;
// type NormalizedAbsolutePath = NormalizedPath & AbsolutePath;








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





