/**
 * Функции
 */

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = (x: number, y: number): number => x + y;

add(1, 2);

// const addResult: string = myAdd(1, 2);






/**
 * Функция с необязательным параметром и без аннотации возвращаемого типа
 */
function add3(x: number, y: number, z?: number) {
    // return x + y + z;

    if (z) {
        return x + y + z;
    }
    return x + y;
}

add3(1, 2, 3); // returns 6

add3(1, 2); // returns 3








/**
 * Функция со значением параметра по-умолчанию
 */
function addDefault(x: number, y: number, z: number = 5): number {
    return x + y + z;
}

addDefault(1, 2); // returns 3

addDefault(1, 2, 3); // returns 6