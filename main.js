

function factorial(n) {
	return (n === 1) ? 1 : n * factorial(n - 1)
}


// Función 'submit' del formulario
async function doCombinations(e) {
	e.preventDefault();

	function _totalWordsToPermute(arr) {
		let totNoLocked = 0
		for (let i = 0; i < arr.length; i++) {
			if (!arr[i].locked) totNoLocked++
		}
		return totNoLocked
	}

	// Cogemos los datos desde el front
	const arrData = getWordsFromFormulary();
	let resp
	const totalWordsToPermute = _totalWordsToPermute(arrData)
	if ( totalWordsToPermute >= 6) {
		resp = await Swal.fire({
			title: 'Atention!!',
			icon: 'question',
			text: `Your choice will calculate ${factorial(totalWordsToPermute)} permutations`,
			footer: '<small class="text-danger">The system will be calculating for a long time... please, be patient!</small>',
			showCancelButton: true,
			confirmButtonText: "I'm agree!!",
		})
	}

	if (totalWordsToPermute < 6 || resp.isConfirmed) {
		// Hacemos las permutaciones
		const finalCombinations = permuteWords(arrData);

		// Visualizamos el resultado en el front
		finalCombinations && showResult(finalCombinations);
	}



}

// Mostramos los 'inputs' en el front
showInputs();
