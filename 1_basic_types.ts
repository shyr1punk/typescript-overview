/**
 * Базовые типы
 *
 * Это примитивные типы из JavaScript и некоторые специальные типы
 */




/**
 * Boolean
 */

let isDone: boolean = true;
//          ^^^^^^^
//       аннотация типа

let falsy = false;
// выведенный тип - неявная типизация
// inferred type - implicit typing




/**
 * Number
 *
 * Все числа как и в JavaScript - числа с плавающей точкой
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// выведен минимально-возможный общий тип
let inferredNumber = 6;





/**
 * String
 */

let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.`;






/**
 * Array
 */

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


const listElem = list.pop();
// подсказки методов и возвращаемых значений

list.some(e => e > 10)
// подсказки типов элементов


const implicitTypedArray = [];
// массив без объявления типа
implicitTypedArray.push(1);
implicitTypedArray.push('str');
implicitTypedArray.push(null);

implicitTypedArray;
// типизируется на основании анализа кода по входящим в него элементам


// implicitTypedArray.filter(v => v.toFixed() < 10);
//                             ^^^^^^^^^^^^^ - ошибка найдена благодаря анализу кода








/**
 * Tuple
 *
 * Кортеж — упорядоченный набор элементов известных типов фиксированной длины
 */


let x: [string, number];
//     ^^^^^^^^^^^^^^^^ аннотация типа кортеж

x = ["hello", 10];

// x = [10, "hello"];
// Ошибка - типы кортежа не соответствуют декларации


// x[2] = 'sdfsdf';
// Ошибка - в кортеже нет элемента с индексом 2











/**
 * Void
 *
 * Пустой тип
 */

/**
 * Чаще всего указывает на то, что функция не возвращает значения
 */
function warnUser(): void {
    console.log("This is my warning message");
}

// декларация переменой типа void не очень полезна
// ей можно присвоить только значения null или undefined
let unusable: void = undefined;












/**
 * Null и Undefined
 */

// этим переменным можно присвоить только соответствующие значения
let u: undefined = undefined;
let n: null = null;



// По умолчанию типы null и undefined являются подтипами всех других типов
// То есть переменной любого типа можно присвоить значение null или undefined

// Это поведение можно изменить флагом --strictNullChecks
// после этого null и undefined можно будет присвоить переменным типов void, null и undefined.
// Это позволяет избежать большого числа ошибок



let possibleNull: string | null = null;


// Нельзя присвоить null не nullable типу
// let impossibleNull: string = null;





/**
 * Never
 *
 * Обозначает результат, который никогда не случится
 */


// Функция возвращает never когда в ней безусловно брошена ошибка
function error(message: string): never {
    throw new Error(message);
}

// тип never выведен
function fail() {
    return error("Something failed");
}

// Функция возвращает never когда в ней недостижим конец
function infiniteLoop(): never {
    while (true) {}
}





/**
 * Object
 *
 * Представляет любой не примитивный тип
 */

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error






