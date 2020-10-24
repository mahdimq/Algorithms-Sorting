function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i];
		let position = i;

		while (position > 0 && arr[position - 1] > currentValue) {
			arr[position] = arr[position - 1];
			position = position - 1;
		}

		arr[position] = currentValue;
	}

	return arr;
}

module.exports = insertionSort;
