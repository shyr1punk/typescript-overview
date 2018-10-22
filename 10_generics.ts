/**
 * Generics
 *
 * Обобщённые типы - позволяют описывать типы как параметры,
 * которые подставляются в момент использования
 */




/**
 * Hello World из мира обобщённого программирования
 */

function identity<T>(arg: T): T {
    return arg;
}
// Явная передача типа обобщения
let idVal1 = identity<string>('sdf')

// Неявный вывод типа дженерика на основании типа входного параметра
let idVal2 = identity(1213)
let idVal3 = identity({
    a: 1,
    b: 2,
    c: 3
});








/**
 * Обобщения для коллекций
 */

interface Item {
    name: string;
    age: number
}



const myMap = new Map<string, Item>();

myMap
    .set('qwe', { name: 'John', age: 20 })
    .set('qwe', { name: 'Alex', age: 31 })
    .set('qwe', { name: 'Jane', age: 18 })
    .set('qwe', { name: 'Ashley', age: 30 })
    .set('qwe', { name: 'Bob', age: 23 });


const myMapKeysIterator = myMap.keys();

const key1 = myMapKeysIterator.next().value;

const myMapValuesIterator = myMap.values();

const value1 = myMapValuesIterator.next().value;







/**
 * Обобщённые интерфейсы
 */


interface GenericIdentityFn<T> {
    (arg: T): T;
}

// Работает только с числами
let myNumberIdentity: GenericIdentityFn<number> = (arg) => arg;
// Работает только со строками
let myStringIdentity: GenericIdentityFn<string> = (arg) => arg;








/**
 * Обобщения для методов DOM
 *
 * <input class="name-input" type="text"></input>
 */

const newNameInput = document.querySelector<HTMLInputElement>('.name-input');

const newUserName = newNameInput && newNameInput.value;






/**
 * Структура ссылается сама на себя
 */

type Tree<T> = {
    value: T;
    left?: Tree<T>;
    right?: Tree<T>;
}

const tree: Tree<number> = {
    value: 4,
    left: {
        value: 2,
        left: {
            value: 1
        }
    },
    right: {
        value: 7,
        left: {
            value: 6
        }
    }
}

tree.right && tree.right.left && tree.right.left.value;







/**
 * Связанный список
 */

type LinkedList<T> = T & { next?: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person> = {
    name: 'Alex',
    next: {
        name: 'John',
        next: {
            name: 'Alice'
        }
    }
};
let s = people.name;
// s = people.next.name;
// s = people.next.next.name;
// s = people.next.next.next.name;
