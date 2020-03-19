/**
 * Any
 *
 * Явная аннотация отключает проверку типов на этапе компиляции
 *
 * Чаще всего выводится компилятором для структур неизвестного типа
 * Например при импорте нетипизированных javascript библиотек
 *
 * Unknown
 *
 * Тип неизвестен, но для операций необходимо добавлять проверки
 * В отличие от any защищает от ошибок времени выполнения
 */




declare const anyValue: any;
declare const unknownValue: unknown;

/**
 * any - можно сделать любую операцию
 */
anyValue(); // TypeError: undefined is not a function;



/**
 * unknown - перед использованием нужно убедится в возможности операции
 */
unknownValue();

if (typeof unknownValue === 'function') {
    unknownValue();
}





/**
 * Если у функции параметры не объявлены явно компилятор выводит тип any
 */
function anyParamsAddFunction(a, b) {
    return a + b;
}
