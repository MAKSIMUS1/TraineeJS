function asyncTask(num) {
    const delay = Math.floor(Math.random() * 10 + 1) * 1000;

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Func #${num}, time: ${delay}`);
            resolve(delay)
        }, delay);
    });
}

const count = Math.floor(Math.random() * 10) + 1;

console.log(`Start, count: ${count}`);

const tasks = [];

for (let i = 1; i <= count; i++) {
    tasks.push(asyncTask(i));
}

Promise.all(tasks).then(result => {
    console.log(`Max time: ${Math.max(...result)}`);
})