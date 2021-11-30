// Write a function that returns the average of an array.

function avg(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum / arr.length
}