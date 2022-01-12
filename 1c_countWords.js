const countWords = (sentence) => {

    sentence = sentence.split(" ")

    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].length > 1) {
            count++
        }
    }

    return count

}


const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

console.log(countWords(sentence));
