function sevenRandomNumbers() {
    const arr = []
    let num = 0;

    while (arr.length < 7) {
        num = Math.floor(Math.random()*10)
        if (!arr.includes(num)) {
            arr.push(num)
        }
    }
    return arr
}

console.log(sevenRandomNumbers())