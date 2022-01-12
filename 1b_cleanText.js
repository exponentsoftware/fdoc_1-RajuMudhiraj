const cleanText = (sentence) => {

    // Initializing variable to store valid characters of the sentence.
    let cleanSentence = ''

    // Concatinating the valid characters to the variable above. Picking valid chars by their ASCII char code. The valid chars are: A to Z (65 to 90), a to z (97 to 122), blank space (32), fullstop (46) and question mark(63)
    for (let i = 0; i < sentence.length; i++) {

        if (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90
            || sentence.charCodeAt(i) >= 97 && sentence.charCodeAt(i) <= 122
            || sentence.charCodeAt(i) == 32 || sentence.charCodeAt(i) == 46
            || sentence.charCodeAt(i) == 63) {

            cleanSentence += sentence[i]
        }
    }

    return cleanSentence;
}


let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence))

