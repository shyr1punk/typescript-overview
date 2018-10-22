
/**
 * Type assertion
 *
 * Утверждение типа - позволяет указать компилятору на необходимый тип
 * Работает только с подтипами
 */


/**
 * <input class="name-input" type="text"></input>
 */

// document.querySelector возвращает тип Element
document.querySelector('.hey');




let nameInput = document.querySelector('.name-input') as HTMLInputElement | null;
// Второй вариант записи - не работает в JSX
// nameInput = <HTMLInputElement | null>document.querySelector('.name-input');

const userName = nameInput && nameInput.value;