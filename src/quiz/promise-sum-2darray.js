const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumArray = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
};

const sum2DArrayConcurrently = (array2D) => {
    const promises = array2D.map(row => {
        // Wrap the sumArray operation in a Promise
        return new Promise((resolve) => {
            const sum = sumArray(row);
            resolve(sum);
        });
    });

    return Promise.all(promises)
        .then(sums => sumArray(sums));
};

sum2DArrayConcurrently(array2D).then(total => {
    console.log('Total Sum:', total);
});