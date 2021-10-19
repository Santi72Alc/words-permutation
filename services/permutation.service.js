
function _permutations(arrInput) {
    let arrFinalOfPermutations = []

    const permute = (arr, arrPermutations = []) => {
        if (!arr.length) {
            arrFinalOfPermutations.push(arrPermutations)
            return
        }

        for (let i in arr) {
            let curr = arr.slice()
            let next = curr.splice(i, 1)
            permute(curr, arrPermutations.concat(next))
        }
    }

    permute(arrInput)
    return arrFinalOfPermutations
}


function permuteWords(arrAllWords) {
    let wordsToPermute = []
    let tmpArrBlocked = []

    arrAllWords.forEach(data => {
        if (data.locked) 
            tmpArrBlocked.push(data.word)
        else {
            wordsToPermute.push(data.word)
            tmpArrBlocked.push(undefined)
        }
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