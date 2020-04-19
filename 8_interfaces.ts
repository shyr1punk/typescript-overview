/**
 * Interfaces
 *
 * Интерфейсы позволяют описывать структуру переменных
 * Самое частое применение - типизация объектов
 */

interface NewUser {
    name: string;
    born?: number;
}

function getUserAge(user: NewUser) {
    return user.born ?
        new Date().getFullYear() - user.born :
        undefined;
}










/**
 * Class interface
 *
 * Позволяет описывать контракт, которому должен соответствовать класс
 */

interface SomeInterface {
    add(a: number, b: number): number;
    // foo(): void; // после добавления нового поля в интерфейс имплементация перестанет соответствовать интерфейсу
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

book.author.length;
book.title = 'На дне'




/**
 * Interface vs Type alias
 *
 * В большинстве случаем псевдоним структурного типа совместим с интерфейсом с такой-же структурой
 *
 *
 * Отличия:
 *
 * Type alias:
 *  - можно создавать для примитивов, объединений и пересечений
 *
 * Interfaces:
 *  - интерфейсы с одинаковым именем в одной области видимости объединяются
 */
type Square = {
    readonly kind: "square";
    size: number;
}

// В примере тип может быть заменён интерфейсом
// interface Square {
//     readonly kind: "square";
//     size: number;
// }

const asd: Square = {
    kind: "square",
    size: 3
}
asd.kind = "";






/**
 * Interface merging
 *
 * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 */

// Опасный пример объединения интерфейсов и класса с одним именем
interface Developer {
    level: number;
}

interface Developer {
    skills: 'awesome';
}

const developer: Developer = {
    level: 80,
    skills: 'awesome'
}



// class Developer {
//     getOne() {
//         return 1;
//     }
// }





// Полезный пример - можно расширять глобальный интерфейс
interface Window {
    webkitAudioContext: typeof AudioContext;
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
