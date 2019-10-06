/**
 * Type alias
 *
 * Псевдонимы типов можно создавать с помощью ключевого слова type
 */


// Алиасы (псевдонимы) примитивных типов и их пересечений
type myString = string;
type stringOrNumber = string | number;


let str: myString;
let strOrNum: stringOrNumber;

str = 'str';
strOrNum = 1;
strOrNum = 'string';







/**
 * Алиасы (псевдонимы) литеральных типов
 */





type typescript = 'typescript';
type one = 1;




type Directions = 'up' | 'right' | 'down' | 'left';
let whereToGo: Directions = 'left';
