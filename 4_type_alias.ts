/**
 * Type alias
 *
 * Псевдонимы типов можно создавать с помощью ключевого слова type
 */


// Алиасы примитивных типов и их пересечений
type myString = string;
type stringOrNumber = string | number;





/**
 * Алиасы литеральных типов
 */





type typescript = 'typescript';
type one = 1;




type Directions = 'up' | 'right' | 'down' | 'left';
let whereToGo: Directions = 'left';
