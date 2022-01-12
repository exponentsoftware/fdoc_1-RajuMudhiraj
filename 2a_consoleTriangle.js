
const consoleTriangle = (char, height) => {

    // Initialized a variable which holds the row which gets concatenated by 1 char at every loop
    let width = ""

    // Initialized a variable which holds the triangle
    let triangle = ""

    for (let i = 0; i < height; i++) {
        //Checking if it is a last loop and eliminating new line
        if (i + 1 == height) {
            width += char
            triangle += width
        }
        else {

            width += char
            triangle += width + "\n"
        }
    }
    return triangle
}

console.log(consoleTriangle('#', 7))