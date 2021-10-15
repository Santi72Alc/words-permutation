let WORDS_TO_READ = 12;


function showInputs() {
    // Permite controlar el número de palabras a permutar
    const $inputNumWords = document.getElementById("inputNumWords");
    $inputNumWords.value = WORDS_TO_READ
    $inputNumWords.onchange = (e) => {
        WORDS_TO_READ = parseInt(e.target.value)
        showBodyTable()
    }

    showTable()
}


function showTable() {
    let $tableDiv = document.getElementById("tableDiv");
    $tableDiv.innerHTML = `<table class="table table-borderless table-hover w-100">
            <thead>
                <tr class="d-flex table-primary mb-2">
                    <th scope="row" class="text-center">#</th>
                    <th class="text-center w-100">Words</th>
                    <th class="text-center"><i class="bi bi-lock-fill"></i></th>
                </tr>
            </thead>
            <tbody id="bodyTableDiv"></tbody>
        </table>`

    showBodyTable()

}


function showBodyTable() {
    const $bodyData = document.getElementById("bodyTableDiv")
    $bodyData.innerHTML = ""
    for (let i = 1; i <= WORDS_TO_READ; i++) {
        $bodyData.innerHTML += `
        <tr class="d-flex align-items-center">
            <th class="text-center">${i.toString().padStart(2, "0")}</th>
            <td class="w-100">
                <input type="text" class="form-control" name="word-${i}" id="word-${i}">
            </td>
            <td class="d-flex justify-content-center">
                <input class="form-check-input" name="locked-${i}" id="locked-${i}" type="checkbox" value="checkedValue"
            </td>
        </tr>`
    }
}


function getWordsFromFormulary() {
    let arrData = []
    let arrWords = []
    for (let i = 1; i <= WORDS_TO_READ; i++) {
        const $nInputWord = document.getElementById(`word-${i}`)
        const $nInputLocked = document.getElementById(`locked-${i}`)
        const data = {
            word: $nInputWord.value.split(' ')[0],
            locked: $nInputLocked.checked
        }
        if (data.word) arrWords.push(data.word)
        arrData.push(data)
    }

    if (arrWords.length !== WORDS_TO_READ) {
        Swal.fire({
            title: `Missing ${WORDS_TO_READ - arrWords.length} words... please check`,
            text: `Must to be ${WORDS_TO_READ} words to generate permutations`,
            icon: 'info'
        })
        return []
    }
    else return arrData
}


// Limpia el formulario
function cleanForm() {
    document.getElementById("formulary").reset();
    document.getElementById("inputNumWords").value = WORDS_TO_READ
}

// Muestra el resultado en el frontend
function showResult(arrCombinations) {
    let $resultHeader = document.getElementById('result-header')

    if (arrCombinations.length) {
        $resultHeader.innerHTML = '<h2>Results</h2>'
        $resultHeader.innerHTML += `<h4>Permutations #: ${arrCombinations.length}</h4>`
    } else $resultHeader.innerHTML = ''

    let $resultData = document.getElementById('result-data')
    $resultData.innerHTML = `
        <table class="table table-borderless table-hover">
            <thead>
                <tr class="d-flex table-primary mb-2">
                    <th>#</th>
                    <th colspan="${WORDS_TO_READ}" class="text-center w-100">Combinations</th>
                </tr>
            </thead>
            <tbody id="data-Rows"></tbody>
        </table>`

    let $dataRows = document.getElementById('data-Rows')
    let strRow = ''
    let wordsToShow = ''
    for (let row = 0; row < arrCombinations.length; row++) {
        strRow = '<tr class="d-flex align-items-center">'
        strRow += `<td>${(row + 1).toString().padStart(2, 0)}</td>`
        // Recorremos las 'WORDS_TO_READ' palabras
        wordsToShow = arrCombinations[row].join(' ')
        //for (let wordIndex = 0; wordIndex < WORDS_TO_READ; wordIndex++) {
            strRow += `<td class="w-100" colspan=12>${wordsToShow}</td>`
        //}
        strRow += '</tr>'
        $dataRows.innerHTML += strRow
    }

}
