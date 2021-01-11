import { default as CONSTANTS } from './constants';

const arr = [...CONSTANTS.smallArray];
let count = 0;

insertion(arr);
console.log('Insertion sort takes', count, 'operations on array of length', arr.length);

export default function insertion(arr) {
  for (let i = 1, max = arr.length; i < max; i++) {
    for (let j = i - 1; j >= 0; j--) {
      //to count operations
      ++count;
      if (arr[j] > arr[j + 1]) {
        arr[j] += arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] -= arr[j + 1];
      } else {
        break;
      }
    }
  }
  return arr;
}
