import { default as CONSTANTS } from './constants';

const arr = [...CONSTANTS.smallArray];
let count = 0;

bubbleSort(arr);
console.log('Bubble sort takes', count, 'operations on array of length', arr.length);

/**
 * Bubble sort.
 */
export default function bubbleSort(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0, max = arr.length - 1; i < max; i++) {
      //to count operations
      ++count;
      if (arr[i] > arr[i + 1]) {
        arr[i] += arr[i + 1];
        arr[i + 1] = arr[i] - arr[i + 1];
        arr[i] -= arr[i + 1];
        isSorted = false;
      }
    }
  }
}
