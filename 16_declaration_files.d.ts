/**
 * Файлы деклараций - файлы с расширением d.ts, который содержат описания типов
 * Нужны для типизации внешнего JavaScript кода
 *
 * Файлы деклараций могут поставляться вместе с пакетами через npm (предпочтительный вариант)
 * Декларируются с помощью секции в package.json:
 *      "types": "./lib/main.d.ts"
 *
 * Или доступны из неймспейса @types, например @types/react, @types/react-dom
 * Исходный код пакетов из это неймспейса {@see https://github.com/DefinitelyTyped/DefinitelyTyped}
 *
 * Можно писать свои файлы деклараций, как в примере ниже
 * Документация {@see https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html}
 *
 * Локальные файлы деклараций можно положить в папку `./typings/`
 */

/**
 * Пример декларации для библиотеки, которая вычисляет свойство line-height элемента
 */
// declare module 'line-height' {
//     function getLineHeight(element: HTMLTextAreaElement): number;

//     export = getLineHeight;
// }
