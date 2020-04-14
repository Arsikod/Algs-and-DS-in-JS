const merge = (arr1, arr2) => {
	let result = []
	let i = 0
	let j = 0

	//compare and push items into array
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i])
			i++
		} else {
			result.push(arr2[j])
			j++
		}
	}

	//when one of arrays above exhausted
	while (i < arr1.length) {
		result.push(arr1[i])
		i++
	}
	while (j < arr2.length) {
		result.push(arr2[j])
		j++
	}

	return result
}

const mergeSort = (arr) => {
	//
	if (arr.length <= 1) {
		return arr
	}

	let mid = Math.floor(arr.length / 2)

	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	return merge(left, right)
}

let arr = [5, 4, 8, 9, 12, 10, 1, 5, 33, 12, 9, 1000, 100, 10001, 15]

console.log(mergeSort(arr))
