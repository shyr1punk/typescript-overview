/**
 * Type assertion
 *
 * Утверждение типа (или Type casting) - позволяет указать компилятору на необходимый тип
 * Работает только с подтипами и супертипами
 */




/**
 * Пример с примитивами
 */


let someString: string | undefined;

// явное утверждение что тип - строка
let someNewString = someString as string;
// явное утверждение что тип не nullable (то есть не null или undefined)
let anotherNewString = someString!;


// string | undefined нельзя привести к типу number
let newNumber = someString as number;







/**
 * Пример с объектами
 */
type Foo = { a: number, b: number };

let v1 = { a: 1, b: 2 } as Foo; // тип литерала объекта и Foo соответствуют структурно

let v2 = { a: 1 } as Foo; // тип литерала объекта супертип к Foo

let v3 = { a: 1, b: 2, c: 3 } as Foo; // тип литерала объекта подтип к Foo

let bad = { d: 4 } as Foo; // У типа  { d: number } и Foo нет связи подтип <-> супертип










/**
 * <input class="name-input" type="text"></input>
 */

// document.querySelector возвращает тип Element
document.querySelector('.name-input');




let anyElement = document.querySelector('.name-input');
let nameInput = document.querySelector('.name-input') as HTMLInputElement | null;
// Второй вариант записи - не работает в JSX
let nameInput2 = <HTMLInputElement | null>document.querySelector('.name-input');

const userName = nameInput && nameInput.value;
