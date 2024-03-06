const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const containsNegative = (arr) => {
    return arr.some(number => number < 0);
};

// Function to check rows for negative numbers concurrently using Promises
const logRowsWithNegativesConcurrently = (array2D) => {
    const promises = array2D.map((row, index) => {
        // Wrap the containsNegative check in a Promise
        return new Promise((resolve) => {
            if (containsNegative(row)) {
                console.log(`Row ${index + 1} contains a negative number:`, row);
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });

    // Use Promise.all to execute all checks concurrently
    return Promise.all(promises)
        .then((results) => {
            if (!results.some(result => result)) {
                console.log('No rows contain negative numbers.');
            }
        });
};

logRowsWithNegativesConcurrently(array2D);