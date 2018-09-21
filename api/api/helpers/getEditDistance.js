'use strict'

module.exports = (a, b) => {
    if (a.length === 0) return b.length
    if (b.length === 0) return a.length
    if (a === b) return 0

    let diff = 0
    if (a.length === b.length) {
        // a = washed chimps
        // b = washed chinos
        for (let i=0; i<a.length; i++) {
            if (a.charAt(i) !== b.charAt(i))
                diff += 1
        }
    }
    else if (a.length < b.length) {
        // a = whip
        // b = washed chinos
        for (let i=0; i<b.length; i++) {
            if (a.charAt(i) !== b.charAt(i)) {
                diff += 1

                if (a.length !== b.length)
                    a = a.substr(0, i) + b.charAt(i) + a.substr(i)
            }
        }
    }
    else {
        // a = washed chinnos
        // b = washed chinos
        for (let i=0; i<a.length; i++) {
            if (a.charAt(i) !== b.charAt(i)) {
                diff += 1

                if (b.length !== a.length)
                    b = b.substr(0, i) + a.charAt(i) + b.substr(i)
            }
        }
    }

    return diff
}


function levMatrix(a, b) {
    if (a.length === 0) return b.length
    if (b.length === 0) return a.length

    let matrix = []

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i]
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j

    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) == a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1]
            } else {
                matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                    Math.min(matrix[i][j-1] + 1, // insertion
                        matrix[i-1][j] + 1)) // deletion
            }
        }
    }
    console.log(matrix)
    console.log(`b: ${b}, a: ${a}, dist: ${matrix[b.length][a.length]}`)
    return matrix[b.length][a.length]
}