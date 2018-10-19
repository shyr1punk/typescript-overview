/**
 * Promises
 */

const promise = new Promise<number>((resolve, reject) => {
    resolve(123);
});

promise.then((res) => {
    res.toFixed();
});





function iReturnPromiseAfter1Second() {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve("Hello world!"), 1000);
    });
}

Promise
    .resolve(123)
    .then((res) => {
        // ^^^ выведен тип number
        return iReturnPromiseAfter1Second();
    })
    .then((res) => {
        // ^^^ выведен тип string
        console.log(res); // Hello world!
    });














// Асинхронная функция, которая эмулирует загрузку по сети
function loadItem(id: number) {
    return new Promise<{ id: number }>((resolve) => {
        console.log('loading item', id);
        setTimeout(() => {
            resolve({ id: id });
        }, 1000);
    });
}

// Цепочка промисов
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    });

// Параллельное выполенение
Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
        const [item1, item2] = res;
        console.log('done');
    });
