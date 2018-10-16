import { Color } from ".";

interface Car {
    maxSpeed: number;
    color?: string;
}

function getCarMaxSpeed(car: Car) {
    return car.color!.trim();
}

interface AddFunction {
    add(x: number, y: number): number;
}

const add: AddFunction['add'] = (x, y) => {
    return x + y;
}

