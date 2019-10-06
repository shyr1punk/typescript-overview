/**
 * Generics
 *
 * Обобщённые типы - позволяют описывать типы как параметры,
 * которые подставляются в момент использования
 */






/**
 * Обобщения для коллекций
 */

interface Item {
    name: string;
    age: number
}


const myArray = new Array<Item>();
// Эквивалентно
// const myArray: Item[] = [];

myArray.push({ name: 'John', age: 20 });
myArray.push({ name: 'Ann', age: 25 });
// myArray.push({ name: 'Rachel' });
// myArray.push({});

///myArray[0].


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


interface GenericPlusFn<T> {
    (a: T, b: T): T;
}

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


function printNames(person?: LinkedList<Person>) {
    if (!person) {
        return;
    }

    console.log(person.name);

    printNames(person.next);
}




/**
 * Пример с функцией получения свойства объекта
 */




enum CarClass {
    F1,
    Nascar,
    Lehmann
}

interface ICar {
    class: CarClass;
    weight: number;
    speed: number;
    acceleration: number;
}

type KeyOfICar = keyof ICar; // type | weight | speed | acceleration


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const mercedesF1: ICar = {
    class: CarClass.F1,
    weight: 775,
    speed: 420,
    acceleration: 1.2
};

// autocomplete
const type = getProperty(mercedesF1, 'class');
// Type: CarClass


// const fuel = getProperty(mercedesF1, 'fuel');
// Error → Argument of type '"fuel"' is not assignable to parameter of type '"class" | "weight" | "speed" | "acceleration"'.



/**
 * keyof typeof something;
 */


const someObj = {
    one: 1,
    two: 2,
    three: 'three'
};

type SomeObj = typeof someObj;

type KeyOfSomeObj = keyof typeof someObj;

