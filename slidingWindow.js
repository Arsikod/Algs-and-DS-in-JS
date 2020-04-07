let maxSubArraySum = (arr, num) => {
	//first condition -> length and num must match
	if (arr.length < num) {
		return null
	}

	let maxSum = 0
	let tempSum = 0

	//create temporary array
	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}
	tempSum = maxSum

	//slide window starting from num
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i]
		maxSum = Math.max(maxSum, tempSum)
	}
	return maxSum
}
