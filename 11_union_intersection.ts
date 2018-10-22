/**
 * Объединения и пересечения типов
 */

/**
 * Объединение типов - union
 */





/**
 * Объединение примитивных типов
 */


let stringOrNumber: string | number = 'string initializer';

stringOrNumber = 4;

// stringOrNumber = null;
// работает флаг --strictNullChecks





/**
 * Пересечение типов (type intersection)
 *
 * Переменная такого типа должна соответствовать всем пересечённым типам
 *
 * type A = B & C;
 * let a: A; <======= a является одновременно переменной типа B и переменной типа C
 */




/**
 * Пересечение литеральных типов
 */

let a: 'yes' & 'no';

// a = 'yes';
// ошибка


// let b: string & number = 4;
// ошибка



/**
 * Пересечение структурных типов
 */

type Colored = {
    color: string;
}

type Visible = {
    visible: boolean;
}

type Size = {
    height: number;
    width: number;
    deep: number;
}


type ColoredVisibleSizeIntersection = Colored & Visible & Size;


// должна содержать все поля типов, которые есть в пересечении
let coloredVisibleSizeIntersection: ColoredVisibleSizeIntersection = {
    color: 'sdf',
    visible: false, // never в случае одинаковых полей разных типов
    height: 1,
    width: 2,
    deep: 3
};


coloredVisibleSizeIntersection.width;



