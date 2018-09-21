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