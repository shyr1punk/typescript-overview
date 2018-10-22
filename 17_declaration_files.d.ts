/**
 * Файлы деклараций - файлы с расширением d.ts, который содержат описания типов
 * Нужны для типизации внешнего JavaScript кода
 *
 *
 * Файлы деклараций могут поставляться вместе с пакетами через npm
 * Декларируются с помощью секции в package.json "types": "./lib/main.d.ts"
 *
 * Или доступны из неймспейса @types, например @types/react, @types/react-dom
 * Исходный код пакетов из это неймспейса https://github.com/DefinitelyTyped/DefinitelyTyped
 *
 * Можно писать свои файлы деклараций, как в примере ниже
 */



declare module 'line-height' {
    function getLineHeight(element: HTMLElement): number;

    export = getLineHeight;
}
