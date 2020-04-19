/**
 * Базовые типы
 *
 * Это примитивные типы из JavaScript и некоторые специальные типы
 *
 *
 * Boolean              - булев тип
 * Number               - числа
 * String               - строки
 * Array                - массивы
 * Tuple                - кортежи (упорядоченный набор фиксированной длины)
 * Enum                 - перечисления (подмножества строк или чисел)
 * Any                  - любой тип (отключает статическую проверку типов)
 * Void                 - пустой тип
 * Never                - тип для невозможного значения
 * Object               - любой не примитивный тип
 * Null and Undefined   - Null and Undefined
 * Symbol               - Symbol
 */




/**
 * Boolean
 */

let isDone: boolean = true;
//          ^^^^^^^
//       аннотация типа - explicit typing

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


implicitTypedArray.filter(v => v.toFixed() < 10);
//                             ^^^^^^^^^^^^^ - ошибка найдена благодаря анализу кода












/**
 * Null и Undefined
 */

// этим переменным можно присвоить только соответствующие значения
let u: undefined = undefined;
let n: null = null;



// По умолчанию типы null и undefined являются подтипами всех других типов
// То есть переменной любого типа можно присвоить значение null или undefined

// Это поведение можно изменить флагом --strictNullChecks (или общим флагом --strict)
// после этого null и undefined можно будет присвоить переменным типов void, null и undefined.
// Это позволяет избежать большого числа ошибок



let possibleNull: string | null = null;


// Нельзя присвоить null не nullable типу со вклёченном флагом --strictNullChecks
let impossibleNull: string = null;







/**
 * Object
 *
 * Представляет любой не примитивный тип
 */

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error





