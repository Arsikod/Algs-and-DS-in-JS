let insertion = (arr) => {
	const exch = (arr, idx1, idx2) => {
		let swap = arr[idx1]
		arr[idx1] = arr[idx2]
		arr[idx2] = swap
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
			exch(arr, j, j - 1)
		}
	}

	return arr
}

let result = insertion([
	5,
	12,
	44,
	88,
	1,
	7,
	66,
	24,
	15,
	79,
	-2,
	99,
	23,
	3,
	7,
	7,
	6,
	9,
	4,
])

console.log(result)
