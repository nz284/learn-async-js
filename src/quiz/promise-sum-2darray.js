function sumOfARow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        console.log('sumOfARow called ... ');
        if(arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0;
                for (let j = 0; j < arr[rowIdx].length; j++) {
                    sum += arr[rowIdx][j];
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject(`Row ${rowIdx} does not exist in the array`);
        }
        console.log('returning from sumOfARow');
    });

}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rowSumPromises = [];
for (let i = 0; i < array2D.length; i++) {
    rowSumPromises.push(sumOfARow(array2D, i));
}

Promise.all(rowSumPromises)
.then((rowSums) => {
    let sum =0;
    rowSums.forEach((rowSum) => {
        sum += rowSum;
    });
    console.log(`Sum = ${sum}`);

})
.catch((error) => {
    console.log(`Error Mesage: ${   error}`);
});