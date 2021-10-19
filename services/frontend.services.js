


// Cambia según introduzcamos en el campo de palabras
function checkInput(e) {
    const $btnSubmit = document.getElementById("btnSubmit")
    const value = e.target.value

    if (value.trim().length) 
        $btnSubmit.removeAttribute("disabled")
    else 
        $btnSubmit.setAttribute("disabled", "true")
}


// Cogemos la lista de palabras y devolvemos un array de objs: { word, locked }
function getWordsFromFormulary() {
    let arrObjWords = []
    const $wordsInput = document.getElementById("textWordsInput").value

    let isLocked = false
    for (word of $wordsInput.split(' ')) {
        if (word.trim().length) {
            isLocked = word[0] === '*'
            arrObjWords.push({
                locked:  isLocked,
                word: isLocked ? word.slice(1) : word
            })
        }
    }
    return arrObjWords
}


// Limpia el formulario
function cleanForm() {
    document.getElementById("formulary").reset();

    let $resultHeader = document.getElementById('result-header')
    let $resultData = document.getElementById('result-data')
    let $btnSubmit = document.getElementById("btnSubmit")

    $resultHeader.classList.add("d-none")
    $resultData.classList.add("d-none")

    $btnSubmit.setAttribute("disabled", "true")
}





// Muestra el resultado en el frontend
function showResult(arrCombinations) {
    let $resultHeader = document.getElementById('result-header')
    $resultHeader.classList.toggle("d-none")
    $resultHeader.innerHTML = `
        <div>
            <h2>Results</h2>
            <h4>Permutations #: ${arrCombinations.length}</h4>
        </div>
    `

    let $resultData = document.getElementById('result-data')
    $resultData.classList.toggle("d-none")
    
    let $dataRows = document.getElementById('data-Rows')
    let txtWords = ''
    let strRows = ''
    new Promise((resolve, reject) => {
        for (let row = 0; row < arrCombinations.length; row++) {
            // Creamos la cadena con todas las palabras de la lista
            txtWords = arrCombinations[row].join(' ')
            strRows += `
                <tr class="d-flex align-items-center">
                    <th>${(row + 1).toString().padStart(10," ")}</th>
                    <td class="w-100">${txtWords}</td>
                </tr>
            `
        }
        resolve(strRows)
    })
    .then( value => {
        $dataRows.innerHTML = value
    })

}

