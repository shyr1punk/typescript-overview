/**
 * Promises
 */

const promise = new Promise<number>((resolve, reject) => {
    resolve(123);
});

promise.then((res) => {
    res.toFixed();
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
loadItem(1)
    .then((res) => {
        let item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        let item2 = res;
        console.log('done');
    });

// Параллельное выполенение
Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
        const [item1, item2] = res;
        console.log('done');
    });
