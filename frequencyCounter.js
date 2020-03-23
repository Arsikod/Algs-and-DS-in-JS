//instead of using two nested loops that will cause a O(N**2) time complexity we use three for loops that cause O(N) time complexity

let arr1 = [4, 3, 5, 6, 10, 5, 4, 4]
let arr2 = [9, 100, 25, 16, 36, 25, 16, 16]

//check if there are squared values of arr1 with same frequency in arr2
let sameSquared = (a1, a2) => {
	if (a1.length !== a2.length) {
		return false
	}
	let freqCounter1 = {}
	let freqCounter2 = {}

	//use for..of for arrays to iterate over iterables
	for (let num of a1) {
		freqCounter1[num] = (freqCounter1[num] || 0) + 1
	}

	for (let num of a2) {
		freqCounter2[num] = (freqCounter2[num] || 0) + 1
	}

	//use for..in for objects to iterate over enumerables(keys)
	for (let key in freqCounter1) {
		//check if there is a squared key in arr2
		if (!(key ** 2 in freqCounter2)) {
			return false
		}
		//check if values of the keys have same frequency
		if (freqCounter2[key ** 2] !== freqCounter1[key]) {
			return false
		}
	}
	return true
}

console.log(sameSquared(arr1, arr2))
