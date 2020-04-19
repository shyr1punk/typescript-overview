/**
 * Объединения и пересечения типов
 */





/**
 * Примитивы
 */

/**
 * Объединение типов - type union
 *
 * Переменная должна соответствовать одному из пересекаемых типов
 */
let stringOrNumber: string | undefined = 'string initializer';

stringOrNumber = undefined;








/**
 * Пересечение типов - результат соответствует всем пересекаемым типам
 *
 * Пересечение литеральных и примитивных типов бессмысленно
 * Результат пересечения - тип never
 */

let a: 'yes' & 'no' = 'yes';
let b: string & number = 4;









/**
 * Пересечения и объединения структурных типов
 */


interface ResponseStatusSuccess {
    status: 'OK';
}

interface ResponsePayload<P> {
    payload: P;
}


/**
 * Пересечение типов - результат соответствует всем пересекаемым типам
 * т.е. должен содержать все поля обоих типов
 */
type ResponseSuccess<P> = ResponseStatusSuccess & ResponsePayload<P>;


interface ResponseStatusFailure {
    status: 'ERROR';
    code: number;
}


/**
 * Объединение типов - результат должен соответствовать одному из пересекаемых типов
 * т.е. содержать или все поля одного из типов
 */
type ResponseBase<P> = ResponseSuccess<P> | ResponseStatusFailure;



/**
 * Создаём новый тип на основе базового - ответ со строкой в payload
 */
type UserNameResponse = ResponseBase<string>;


declare function fetchUserName(id: number): UserNameResponse;


const userResponse = fetchUserName(1);

if (userResponse.status === 'OK') {
    // Если статус OK - значит есть payload
    console.log('User name: ', userResponse.payload)
} else {
    // Иначе есть код ошибки
    console.log('Error code: ', userResponse.code);
}






/**
 * Пересечение типов при использовании Object.assign()
 */
const newObject = Object.assign({}, {
    a: 1,
    b: 2,
}, {
    c: 3,
})
