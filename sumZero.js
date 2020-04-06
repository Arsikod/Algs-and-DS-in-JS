//In a sorted array find first sum of zero

let arr = [-3, -2, -1, 0, 1, 2, 3]

//Here is O(N**2) time complexity solution
let sumZero = array => {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === 0) {
				return [array[i], array[j]]
			}
		}
	}
}

//Below a Multiple pointers solution pattern
//Time complexoty is O(N)
let pointSumZero = array => {
	let leftPointer = 0
	let rightPointer = array.length - 1

	while (leftPointer < rightPointer) {
		//set initial sum of array endpoints
		let sum = array[leftPointer] + array[rightPointer]
		if (sum === 0) {
			return [array[leftPointer], array[rightPointer]]
		} else if (sum > 0) {
			//if sum is positive, means number on right is greater than left number
			//need to dicrease right pointer
			rightPointer--
		} else {
			leftPointer++
		}
	}
}

console.log(pointSumZero([-4, -3, -2, 1, 0, 1, 2, 5, 10]))
