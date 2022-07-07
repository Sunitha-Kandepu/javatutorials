'use strict';

let arr = [5, 3, 2, 0, 9, 10, 39, 1, 91, -12, -11, -10, -9];
quicksort(arr, 0, arr.length - 1);
for (const value of arr) {
	console.log(value);
}

function swap(array, left, right) {
	const temp = array[right];
	array[right] = array[left];
	array[left] = temp;
}

function l_partition(array, i, j) {
	const pivot = i;

	while (i < j) {
		while (array[pivot] < array[j]) {
			j--;
		}
		while (i < j && array[pivot] >= array[i]) {
			i++;
		}
		swap(array, i, j);
	}
	swap(array, pivot, i);
	return i;
}

function r_partition(array, i, j) {
	const pivot = j;

	while (i < j) {
		while (i < j && array[pivot] >= array[i]) {
			i++;
		}
		while (i < j && array[pivot] < array[j]) {
			j--;
		}
		swap(array, i, j);
	}
	swap(array, pivot, i);
	return i;
}

function m_partition(array, i, j) {
	const pivot = Math.ceil((i + j) / 2);

	while (i < j) {
		while (i < j && array[pivot] >= array[i]) {
			i++;
		}
		while (array[pivot] <= array[j]) {
			j--;
		}
	}
	swap(array, pivot, j);
	return j;
}

function quicksort(array, start, end) {
	if (start >= end) {
		return ;
	}
	const l_pivot = l_partition(array, start, end);
	const r_pivot = r_partition(array, start, end);
	const m_pivot = m_partition(array, start, end);
	quicksort(array, start, m_pivot - 1);
	quicksort(array, m_pivot + 1, end);
}
