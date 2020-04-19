/**
 * Функции
 *
 * TypeScript позволяет описать типы входных и выходных параметров
 * и предупреждает о возможных ошибках
 */



function concatenate(x: string, y: string): string {
    return x + y;
}

const res = concatenate('first', 'second');





function sqr(n: number) {
    return n * n;
}

// ошибка несоответствия типов
sqr('any string');






/**
 * Функция с необязательным параметром и без аннотации возвращаемого типа
 */
function add3(x: number, y: number, z?: number) {
    // Object is possibly 'undefined'.ts(2532)
    return x + y + z;

    // Нужно проверять на undefined
    // if (z) {
    //     return x + y + z;
    // }
    // return x + y;
}

add3(1, 2, 3); // returns 6

add3(1, 2); // returns 3




/**
 * Алиас для функции
 */
type AddFunction = (a: number, b: number) => number;

const addFunction: AddFunction = (a, b) => a + b;
