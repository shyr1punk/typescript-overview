/**
 * Any
 *
 * Явная аннотация отключает проверку типов на этапе компиляции
 *
 * Чаще всего выводится компилятором для структур неизвестного типа
 * Например при импорте нетипизированных javascript библиотек
 */


// не делайте @ts-ignore
// @ts-ignore
import * as lib from './lib.js';




const libName = lib.name;

lib.add(1, 2);

lib.remove();


// TODO: явный any


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



// unknownLib.add(1, 2) // <<<===== Ошибка





/**
 * Type guard
 *
 * "Защитник типа" принимает любой объект и возвращает результат, является ли объект некоторым типом
 */
type WithAddFunction = {
    add: (a: number, b: number) => number;
}

function hasAddFunction(obj: any): obj is WithAddFunction {
    return obj && typeof obj.add === 'function';
}


// Теперь после проверки с помощью type guard можно обратиться к add
if (hasAddFunction(unknownLib)) {
    console.log(unknownLib.add(1, 2));
}

