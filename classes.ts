/**
 * Classes
 */


/**
 * Class interface
 *
 * Позволяет описывать контракт, которому должен соответствовать класс
 */

interface SomeInterface {
    add(a: number, b: number): number;
    // foo(): void;
}

class SomeClass implements SomeInterface {
    add(c: number, d: number) {
        return c + d;
    }
}



class Animal {
    name: string; // Можно использовать модификаторы доступа public private protected readonly
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} преодолела ${distanceInMeters} метров`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Поползли...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Поскакали...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Змейка");
let tom: Animal = new Horse("Лошадка");

sam.move();
tom.move(34);



// заменить про абстрактные классы
