/**
 * Classes
 *
 * Классы в typescript соответствуют классам в ES2015 со следующими отличиями
 */





/**
 * Модификаторы доступа
 *
 * - public
 * - private
 * - protected
 * - readonly
 */
class FooBase {
    public x: number = 1;
    private y: number = 2;
    protected z: number = 3;
    readonly visible: boolean = false;
}


var foo = new FooBase();
foo.x;
foo.y;
foo.z;
foo.visible = true;


class FooChild extends FooBase {
    constructor() {
      super();
        this.x;
        this.y;
        this.z;
    }
}









/**
 * Абстрактные классы
 *
 * Это базовые классы, из которых нельзя создать экземпляр
 * Они обязательно должны быть наследованы
 */

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

const animal = new Animal();

class Cat extends Animal {
    makeSound() {
        console.log('meow!');
    }
}

const cat = new Cat();




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
