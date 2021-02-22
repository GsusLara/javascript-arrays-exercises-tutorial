let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

//your code here
console.log(theBools.map(numero => {
    if (numero == 1) {
        return 'wiki'
    } else {
        return 'woko'
    }
})
)