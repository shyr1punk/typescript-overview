
/**
 * Type assertion
 *
 * Утверждение типа - позволяет указать компилятору на необходимый тип
 * Работает только с подтипами и супертипами
 */

type Foo = {a:number, b:number};
let v1 = {a:1, b:2} as Foo;
let v2 = {a:1} as Foo; // супертип
let v3 = {a:1, b:2, c:3} as Foo; // подтипам
// let bad = {d: 4} as Foo;


/**
 * <input class="name-input" type="text"></input>
 */

// document.querySelector возвращает тип Element
document.querySelector('.hey');




let nameInput = document.querySelector('.name-input') as HTMLInputElement | null;
// Второй вариант записи - не работает в JSX
// nameInput = <HTMLInputElement | null>document.querySelector('.name-input');

const userName = nameInput && nameInput.value;