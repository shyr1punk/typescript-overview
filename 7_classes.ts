/**
 * Classes
 *
 * Классы в typescript соответствуют классам в ES2015 со следующими отличиями
 */





/**
 * Модификаторы доступа - работают только во время компиляции
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
foo.y; // Property 'y' is private and only accessible within class 'FooBase'.ts(2341)
foo.z; // Property 'z' is protected and only accessible within class 'FooBase' and its subclasses.ts(2445)
foo.visible = true; // Cannot assign to 'visible' because it is a read-only property.ts(2540)


class FooChild extends FooBase {
    constructor() {
      super();
        this.x;
        this.y; // Property 'y' is private and only accessible within class 'FooBase'.ts(2341)
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

// ошибка создания экземпляра абстрактного класса
const animal = new Animal();

class Cat extends Animal {
    makeSound() {
        console.log('meow!');
    }
}

const cat = new Cat();





