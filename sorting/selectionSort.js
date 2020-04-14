const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			//at the end of this loop we scan all the values and find the lowest value.
			if (arr[j] < arr[min]) {
				min = j
			}
		}
		//after we scanned all the values at j we need to swap outside of the j loop
		if (i != min) {
			exch(arr, i, min)
		}
	}
	return arr
}

const exch = (arr, p, q) => {
	let swap = arr[p]
	arr[p] = arr[q]
	arr[q] = swap
}

let result = selectionSort([
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
