
// Función 'submit' del formulario
function doCombinations(e) {
	e.preventDefault();

	// Cogemos los datos desde el front
	const arrData = getWordsFromFormulary();

	if (arrData) {
		// Hacemos las permutaciones
		const finalCombinations = combineWords(arrData);

		// Visualizamos el resultado en el front
		finalCombinations && showResult(finalCombinations);
	}

}

// Mostramos los 'inputs' en el front
showInputs();
