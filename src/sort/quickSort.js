import { default as CONSTANTS } from './constants';

const arr = [...CONSTANTS.smallArray];
let count = 0;

quickSort(arr);
console.log('Quick sort takes', count, 'operations on array of length', arr.length);

function swap(arr, index1, index2) {
  //to count operations
  ++count;
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function findIndexForPivot(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; ++j) {
    //to count operations
    ++count;
    if (arr[j] < pivot) {
      ++i;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}

export default function quickSort(arr, low = 0, high = arr.length - 1) {
  //to count operations
  ++count;
  if (low < high) {
    const index = findIndexForPivot(arr, low, high);
    quickSort(arr, low, index - 1);
    quickSort(arr, index +1, high);
  }
}
