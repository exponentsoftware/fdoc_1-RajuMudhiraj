

const countWords = (p, w1, w2) => {

    // Converting the string into an array by splitting with " "
    p = p.split(" ")

    // Initializing variables to store the count of occurences of given words respectively.
    let w1Count = 0;
    let w2Count = 0;

    // Iterating through the array and comparing each word with the given words, if matched with any of the given words, increasing the respective variable by 1.
    for (let i = 0; i < p.length; i++) {
        if (p[i] == w1 || p[i] == `${w1}.`) {
            w1Count++
        }
        else if (p[i] == w2 || p[i] == `${w2}.`) {
            w2Count++
        }
    }

    //Checking if none of the words occured in the paragraph and returning appropriate sentence.
    if (w1Count == 0 && w2Count == 0) {
        return `None of the words are present in the paragraph.`
    }

    // Checking if word1 has more occurences than word2 and returning appropriate sentence.
    else if (w1Count > w2Count) {
        return `The word ${w1} more frequently occurred than ${w2}.`
    }

    //Checking if both words occured equally in the paragraph and returning appropriate sentence.
    else if (w1Count == w2Count) {
        return `Both words occured same number of times.`
    }

    // If none of the above conditions satisfied, word2 will be the one with more occurences in the paragraph. Hence returning the same.
    else {
        return `The word ${w2} more frequently occurred than ${w1}.`

    }

}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

console.log(countWords(paragraph, 'love', 'you'))
