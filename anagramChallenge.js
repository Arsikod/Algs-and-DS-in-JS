//idea is to check if both strings have the same letters with the same FREQUENCY
//Frequency counter solution pattern
//ex: cinema vs iceman
let str1 = "anagram"
let str2 = "nagaram"

const anagramChecker = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false
	}

	let freqCheck1 = {}
	let freqCheck2 = {}

	for (let char of str1) {
		freqCheck1[char] = (freqCheck1[char] || 0) + 1
	}

	for (let char of str2) {
		freqCheck2[char] = (freqCheck2[char] || 0) + 1
	}

	for (let key in freqCheck1) {
		//if keys(letter) are the same
		if (!(key in freqCheck2)) {
			return false
		}
		//if frequency(num of letters) are the same
		if (freqCheck2[key] !== freqCheck1[key]) {
			return false
		}
	}
	return true
}

console.log(anagramChecker(str1, str2))
