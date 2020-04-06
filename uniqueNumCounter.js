//convert array into object
//loop over key value pairs
//set counter and if value === 1 then counter++
//return counter

let uniQue = (arr) => {
	let arrObj = {}
	let counter = 0

	//convert array into an object
	for (let el of arr) {
		arrObj[el] = (arrObj[el] || 0) + 1
	}

	//loop over key values to find if it is equal to 1 (unique)
	for (let key in arrObj) {
		if (arrObj[key] === 1) {
			counter++
		}
	}
	return counter
}

let array = []

console.log(uniQue(array))
