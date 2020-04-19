/**
 * Promise и async/await
 */


interface User {
    firstname: string;
    secondname: string;
    age: number;
}



// Typescript выводит тип возвращаемого значения
// по возвращаемому результату последнего then в цепочке
function fetchUser(id: number) {
    return fetch('/some/url', {
        method: 'get'
    })
        .then(
            res => res.json(),
            reason => {
                console.error(reason);
            }
        )
        // после res.json() можем указать данные какого типа мы получили
        .then((user: User) => ({
            ...user,
            id
        }));
}




// Работа с Promise.all
function usersAgeAreEqual(id1: number, id2: number) {
    return Promise.all([
        fetchUser(id1),
        fetchUser(id2)
    ])
        // подсказка типа результатов
        .then(users => {
            const [ user1, user2 ] = users;
            return user1.age === user2.age;
        });
}








// Типизация async/await основана на типизации Promise
// т.е. async функция возвращает Promise<...>
async function getUserName(id: number) {
    // вызов аснхронной функции с await убирает обёртку Promise
    const fullname = await fetchUser(id)
        .then(res => `${res.firstname} ${res.secondname}`);

    return fullname;
}
