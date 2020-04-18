const partition = (arr, start = 0, end = arr.length - 1) => {
	const swap = (arr, p, q) => {
		let temp = arr[p]
		arr[p] = arr[q]
		arr[q] = temp
	}

	let pivot = arr[start]
	let swapIdx = start

	//compare all elements after pivot (start + 1)
	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++
			swap(arr, swapIdx, i)
		}
	}

	swap(arr, start, swapIdx)
	return swapIdx
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		//base case occurs when subarray is less than 2 elements
		let pivotPoint = partition(arr, left, right)
		quickSort(arr, left, pivotPoint - 1) //pivotpoint is already sorted, so not included
		quickSort(arr, pivotPoint + 1, right)
	}

	return arr
}

console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([7, 6, 9, 5, 3, 4, 12, 1, 2, 10, 20, 7, 30, 40]))
