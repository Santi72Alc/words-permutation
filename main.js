
function factorial(n) {
	return (n === 1) ? 1 : n * factorial(n - 1)
}


// Función 'submit' del formulario
async function doCombinations(e) {
	e.preventDefault();
	
	// Cogemos las palabras desde el front
	const arrData = getWordsFromFormulary();

	const finalCombinations = permuteWords(arrData);
	// Si hay permutaciones que visualizar...
	finalCombinations && showResult(finalCombinations)

}
