const array = [ [1, 2, 3], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2, 3, 4] ];

function sortArray(arr) {
    for(let j = arr.length - 1; j > 0; j--) {
        for(let i = 0; i < j; i++) {
            if(arr[i].length > arr[i + 1].length) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

console.log(array);
sortArray(array);
console.log(array);
