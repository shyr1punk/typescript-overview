/**
 * Generic Classes
 */

class GenericNumber<T> {
    zeroValue?: T;

    add(x: T, y: T): T { return x; };
}

// let myGenericNumber = new GenericNumber<{}>();

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
