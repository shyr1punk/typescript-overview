/**
 * Enums
 *
 * Перечисление — набор именованных констант
 *
 * Например подмножество типа number или string и красивые имена для этого
 */

// числовые константы
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}

/**
 * сгенерированный код
 *
 * var Direction1;
 * (function (Direction1) {
 *     Direction1[Direction1["Up"] = 0] = "Up";
 *     Direction1[Direction1["Down"] = 1] = "Down";
 *     Direction1[Direction1["Left"] = 2] = "Left";
 *     Direction1[Direction1["Right"] = 3] = "Right";
 * })(Direction1 || (Direction1 = {}));
 */

// строковые константы
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}


function goTo(dir: Direction2): void {
    console.log(dir); // Строковое значение перечисления
}

goTo(Direction2.Up);

/**
 * сгенерированный код
 *
 * var Direction2;
 * (function (Direction2) {
 *     Direction2["Up"] = "UP";
 *     Direction2["Down"] = "DOWN";
 *     Direction2["Left"] = "LEFT";
 *     Direction2["Right"] = "RIGHT";
 * })(Direction2 || (Direction2 = {}));
 */





/**
 * const Enum
 *
 * Тип вырезается во время компиляции, по месту использования инлайнятся значения
 */


const enum ConstEnum {
    Udo = 1,
    Dos,
    Tres,
    Cuatro,
}

const num = ConstEnum.Tres;

//
// Будет сгененирован код:
//
// const num = 3 /* Tres */;
//