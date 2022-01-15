function checkUniqueness(arr) {

    arr = arr.sort((a,b) => { return a - b })

    let result = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            result = false;
            return result;
        }
    }
    return result;
}

console.log(checkUniqueness([1, 2, 3, 4, 5, 6, 7, 8]))