/**
 * Interfaces
 *
 * Интерфейсы позволяют описывать структуру переменных
 * Самое частое применение - типизация объектов
 */

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}













/**
 * Function Types
 *
 * Описание интерфейса функции
 */

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source, subString) {
    let result = source.search(subString);

    return result > -1;
}











/**
 * Class interface
 *
 * Позволяет описывать контракт, которому должен соответствовать класс
 */

interface SomeInterface {
    add(a: number, b: number): number;
    // foo(): void;
}

class SomeClass implements SomeInterface {
    add(c: number, d: number) {
        return c + d;
    }
}






/**
 * Необязательные поля и readonly свойства
 */
interface Book {
    readonly title: string;
    author?: string;
    year: number;
}

const book: Book = {
    title: 'Война и мир',
    year: 1869
}

// book.author && book.author.length;
// book.title = 'На дне'




/**
 * Type alias для структурных типов
 *
 * В большинстве случаем псевдоним структурного типа совместим с интерфейсом с такой-же структурой
 */
type Square = {
    readonly kind: "square";
    size: number;
}

// interface Square {
//     readonly kind: "square";
//     size: number;
// }

const asd: Square = {
    kind: "square",
    size: 3
}
// asd.kind = "";