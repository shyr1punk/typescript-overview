const promise = new Promise<number>((resolve, reject) => {
    resolve(123);
});

promise.then((res) => {
    res.toFixed();
});

promise.catch((err) => {
    // This is never called
});





function iReturnPromiseAfter1Second() {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve("Hello world!"), 1000);
    });
}

Promise
    .resolve(123)
    .then(() => {
        // res is inferred to be of type `number`
        return iReturnPromiseAfter1Second(); // We are returning `Promise<string>`
    })
    .then((res) => {
        // res is inferred to be of type `string`
        console.log(res); // Hello world!
    });














// an async function to simulate loading an item from some server
function loadItem(id: number) {
    return new Promise<{ id: number }>((resolve) => {
        console.log('loading item', id);
        setTimeout(() => { // simulate a server delay
            resolve({ id: id });
        }, 1000);
    });
}

// Chaining
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    }); // overall time will be around 2s

// Parallel
Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
        const [item1, item2] = res;
        console.log('done');
    }); // overall time will be around 1s