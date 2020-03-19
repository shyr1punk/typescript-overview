/**
 * Generics - обобщённые типы
 *
 * позволяют описывать типы как параметры,
 * которые подставляются в момент использования
 */






/**
 * Обобщения для коллекций
 */

/**
 * массива чисел
 */

const numbersArray: Array<number> = [1, 2, 3];





/**
 * массив объектов
 */
interface Item {
    name: string;
    age: number
}

// Пример записи типа для массива через обобщение конструктора массива
const myArray = new Array<Item>();
// Эквивалентно
// const myArray: Item[] = [];

myArray.push({ name: 'John', age: 20 });
myArray.push({ name: 'Ann', age: 25 });
// myArray.push({ name: 'Rachel' });
// myArray.push({});

const arrayItem = myArray[0];








/**
 * Обобщённые интерфейсы
 */

// хороший фрукт
interface Apple {
    eat(): void;
}

// опасный фрукт
interface DangerousFruit {
    smell(): void;
}


// обобщённый интерфейс плодового дерева
interface Tree<T> {
    name: string;
    fruit: T;
}




// экземпляр яблони
const appleTree: Tree<Apple> = {
    name: 'Apple tree',
    fruit: {
        eat: () => { console.log('Om nom nom'); }
    }
};

// яблоко можно скушать
appleTree.fruit.eat();




// экземпляр опасного дерева
const dangerousTree: Tree<DangerousFruit> = {
    name: 'Dangerous tree',
    fruit: {
        smell: () => { console.log('OMG!') }
    }
}

// нельзя скушать
dangerousTree.fruit.eat();
dangerousTree.fruit.smell();










/**
 * Обобщённые типы для функций
 */


// обобщённый тип для функции
type GenericPlusFn<T> = (a: T, b: T) => T;

// Работает только с числами
let addFn: GenericPlusFn<number> = (a, b) => a + b;

// Работает только со строками
let concatFn: GenericPlusFn<string> = (a, b) => `${a} bla ${b}`;


let addRes = addFn(1, 2);
// let addRes2 = addFn(1, '2');









/**
 * Обобщения для методов DOM
 *
 * <input class="name-input" type="text"></input>
 */
const newNameInput = document.querySelector<HTMLInputElement>('.name-input');

const newUserName = newNameInput && newNameInput.value;




// запись выше предпочтительнее, чем type assertion
const assertNameInput = document.querySelector('.name-input') as HTMLInputElement | null;


