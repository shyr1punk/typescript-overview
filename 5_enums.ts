/**
 * Enums
 *
 * Перечисление — набора именованных констант
 */

 // числовые константы
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

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
