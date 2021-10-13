
function _permutations(arrInput) {
    let _permutations = []

    const permute = (arr, permutation = []) => {
        if (!arr.length) {
            _permutations.push(permutation)
            return
        }

        for (let i in arr) {
            let curr = arr.slice()
            let next = curr.splice(i, 1)

            permute(curr, permutation.concat(next))
        }
    }

    permute(arrInput)
    return _permutations
}

function permuteWords() {

}



function permuteWords(arrData) {
    let wordsToPermute = []
    let tmpArrBlocked = []
    arrData.forEach(data => {
        // if (data.word) {
            if (data.locked) tmpArrBlocked.push(data.word)
            else {
                wordsToPermute.push(data.word)
                tmpArrBlocked.push(undefined)
            }
        // }
    })
    // Generamos las permutaciones ... 
    const arrWordsPermuted = _permutations(wordsToPermute)

    let finalCombinations = []
    // Para cada permutación posible... hacemos los cambios en el array de bloqueados
    arrWordsPermuted.forEach(row => {
        let tmpArrOfWords = []
        tmpArrBlocked.forEach(word => {
            word 
            ? tmpArrOfWords.push(word) 
            : tmpArrOfWords.push(row.shift())
        })
        finalCombinations.push(tmpArrOfWords)
    })

    return finalCombinations
}