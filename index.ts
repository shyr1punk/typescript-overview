let bool: boolean = false;

let num: number = 1;

let str: string = 'sdfsdfsdf';
let str2: string = `sdfsdfsdf ${1}`;

let arr: string[] = [str, str2];

let tuple: [number, string] = [1, 'sdf'];

export enum Color {
    black = 'black',
    white = 'white',
    red = 'red'
}

let a: Color;

a = Color.black;

let anyTyped: any;

anyTyped = 1;

anyTyped = 'sdfsdffds';

let b: unknown;

b = { a: 123 };

const n = null;

let obj: object = { a: 12 };



type Alias = { num: number }
interface Interface { num: number; }
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;


class Aliased implements Alias {
    num: number = 1;
}

// https://www.typescriptlang.org/docs/handbook/advanced-types.html

// Interfaces vs. Type Aliases

// As we mentioned, type aliases can act sort of like interfaces; however, there are some subtle differences.

// One difference is that interfaces create a new name that is used everywhere. Type aliases don’t create a new name — for instance, error messages won’t use the alias name. In the code below, hovering over interfaced in an editor will show that it returns an Interface, but will show that aliased returns object literal type.

// ```
// type Alias = { num: number }
// interface Interface {
//     num: number;
// }

// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;
// ```

// A second more important difference is that type aliases cannot be extended or implemented from (nor can they extend/implement other types). Because an ideal property of software is being open to extension, you should always use an interface over a type alias if possible.

// On the other hand, if you can’t express some shape with an interface and you need to use a union or tuple type, type aliases are usually the way to go.
