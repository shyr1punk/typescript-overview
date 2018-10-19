/**
 * Interfaces
 *
 * Интерфейсы позволяют описывать структуру переменных
 * Самое частое применение - типизация объектов
 */

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);












/**
 * Function Types
 *
 * Описание интерфейса функции
 */

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source, subString) {
    let result = source.search(subString);

    return result > -1;
}




