/**
 * Продвинутая работа с типами
 */

/**
 * Объединение типов - union
 */



/**
 * Объединение литеральных типов
 */

// Объявим переменную с объединением типов строковых литералов
let direction: 'up' | 'right' | 'down' | 'left';

// direction =
// попробуем присвоить значение
// typescript подсказываем возможные значения и не даёт ввести неправильное


// можно создавать свои типы
type Directions = 'up' | 'right' | 'down' | 'left';
// let whereToGo: Directions =




/**
 * Объединение примитивных типовs
 */


let stringOrNumber: string | number = 'string initializer';

stringOrNumber = 4;

//stringOrNumber = null;
// работает флаг --strictNullChecks



/**
 * Объединение структурных типов
 */

interface Colored {
    color: string;
}

interface Visible {
    visible: boolean;
}

interface Size {
    height: number;
    width: number;
    deep: number;
}

type ColoredVisibleSizeUnion = Colored | Visible | Size;

let coloredVisibleSize: ColoredVisibleSizeUnion = {
    color: 'df',
    visible: false,
    height: 1,
    // unknownProp: 1
}

// coloredVisibleSize.width;


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



type ColoredVisibleSizeIntersection = Colored & Visible & Size;


// должна содержать все поля типов, которые есть в пересечении
let coloredVisibleSizeIntersection: ColoredVisibleSizeIntersection = {
    color: 'sdf',
    visible: false,
    height: 1,
    width: 2,
    deep: 3
};


coloredVisibleSizeIntersection.width;