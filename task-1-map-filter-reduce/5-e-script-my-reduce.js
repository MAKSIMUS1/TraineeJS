Array.prototype.reduce = function (combiner, initialValue) {
    let hasInitial = arguments.length > 1;
    let acc = hasInitial ? initialValue : this[0];

    let startIndex = hasInitial ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        acc = combiner(acc, this[i]);
    }

    return acc;
};

console.log( [1,2,3].reduce((memo, item) => { return memo + item; }) ); // === 6
console.log( [1,2,3].reduce((memo, item) => { return memo + item; }, 10) ); //=== 16
