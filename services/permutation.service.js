
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



function combineWords(arrData) {
    let tmpArrDataBlocked = arrData.map(data => {
        if (data.locked && data.word) return data.word
        else return undefined
    })
    let wordsToPermute = []
    // Cogemos las palabras que NO son fijas para permutar
    arrData.forEach(data => {
        if (!data.locked && data.word) wordsToPermute.push(data.word)
    })
    // Generamos las permutaciones ... 
    const arrWordsPermuted = _permutations(wordsToPermute)

    let finalCombinations = []
    // Para cada permutación posible... hacemos los cambios en el array de bloqueados
    arrWordsPermuted.forEach(row => {
        let tmpArr = []
        tmpArrDataBlocked.forEach(word => {
            if (!word) tmpArr.push(row.shift())
            else tmpArr.push(word)
        })
        finalCombinations.push(tmpArr)
    })

    return finalCombinations
}