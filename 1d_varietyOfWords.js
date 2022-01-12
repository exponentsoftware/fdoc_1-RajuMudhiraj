const varietyOfWords = (sentence) => {

    // Removing special chars
    sentence = sentence.replace(/[^a-zA-Z ]/g, "")

    // Converting the string to an array and splitting by " "
    sentence = sentence.split(" ")

    // Initialized a variable to hold the count
    let count = 0;

    // Iterating through the array and converting the duplicate entries into empty string "" and counting the unique words.
    for (let i = 0; i < sentence.length - 1; i++) {
        if (sentence[i] != "") {
            for (let j = i + 1; j < sentence.length; j++) {

                if (sentence[i] == sentence[j]) {
                    sentence[j] = ""
                }
            }
            count++
        }
    }
    return count
}

let sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

console.log(varietyOfWords(sentence));