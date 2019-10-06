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
 *
 * Локальные файлы деклараций можно положить в папку `@types` на любом уровне вложенности проекта
 *
 * В файлы d.ts нельзя подключать другие файлы деклараций и модули TypeScript
 */



declare module 'line-height' {
    function getLineHeight(element: HTMLTextAreaElement): number;

    export = getLineHeight;
}
