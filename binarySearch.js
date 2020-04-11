let binarySearch = (arr, num) => {
	let min = 0
	let hi = arr.length - 1
	let mid = Math.floor((hi + min) / 2)

	while (num !== arr[mid] && min < hi) {
		if (num > arr[mid]) {
			min = mid + 1
		} else {
			hi = mid - 1
		}
		mid = Math.floor((hi + min) / 2)
	}
	if (num === arr[mid]) {
		return mid
	} else {
		return -1
	}
}

console.log(
	binarySearch([1, 2, 3, 5, 9, 12, 22, 35, 42, 51, 64, 69, 72, 73, 87], 5)
)
