/**
 * Any
 *
 * Явная аннотация отключает проверку типов на этапе компиляции
 *
 * Чаще всего выводится компилятором для структур неизвестного типа
 * Например при импорте нетипизированных javascript библиотек
 */


// @ts-ignore
import * as lib from './lib.js';




const libName = lib.name;

lib.add(1 + 2);

lib.remove();






/**
 * Unknown
 *
 * Тип неизвестен, но для операций необходимо добавлять проверки
 * В отличие от any защищает от ошибок времени выполнения
 */


/**
 * Переменная типа unknown
 */

const unknownLib: unknown = lib;



// unknownLib.add(1, 2)





function hasAddFunction(obj: any): obj is {
    add: (a: number, b: number) => number
} {
    return obj &&
        typeof (<any>obj).add === 'function';
}

if (hasAddFunction(unknownLib)) {
    console.log(unknownLib.add(1, 2));
}

