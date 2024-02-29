function negativeRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        console.log(`Negative Row called ... `);
        if(arr.length > rowIdx) {
            setTimeout(() => {
                let hasNegative = false;
                for (let j = 0; j < arr[rowIdx].length; j++) {
                    if(arr[rowIdx][j] < 0) {
                        hasNegative = true;
                    }
                }
                console.log(`row ${rowIdx} has negative: ${hasNegative}`);
                resolve(hasNegative);
            }, 0);
        } else {
            console.log('rejecting ... ');
            reject(`Row ${rowIdx} does not exist in the array`);
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let negativeRowPromises = [];

for (let i = 0; i < array2D.length; i++) {
    negativeRowPromises.push(negativeRow(array2D, i));
}

Promise.all(negativeRowPromises)
.then((results) => {
    console.log(`Has negative: ${results.includes(true)}`);
});