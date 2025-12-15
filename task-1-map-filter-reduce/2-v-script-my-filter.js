Array.prototype.filter = function (predicateFunction) {
    const resultArray = new Array();
    this.forEach(element => {
        if(predicateFunction(element))
            resultArray.push(element)
    });
    return resultArray;
};

console.log(JSON.stringify([1,2,3].filter((x) => { return x > 2})) === "[3]");
