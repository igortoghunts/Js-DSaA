import { default as CONSTANTS } from './constants';

const arr = [...CONSTANTS.smallArray];
let count = 0;

mergeSort(arr, 0, arr.length - 1);
console.log('Merge sort takes', count, 'operations on array of length', arr.length);

/**
 * Merge sort.
 */

function merge(arr1, arr2) {
  const sortedArr = [];
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;
  while (firstArrayIndex < arr1.length && secondArrayIndex < arr2.length) {
    //to count operations
    ++count;
    if (arr1[firstArrayIndex] < arr2[secondArrayIndex]) {
      sortedArr.push(arr1[firstArrayIndex]);
      ++firstArrayIndex;
    } else {
      sortedArr.push(arr2[secondArrayIndex]);
      ++secondArrayIndex;
    }
  }
  while (firstArrayIndex !== arr1.length) {
    //to count operations
    ++count;
    sortedArr.push(arr1[firstArrayIndex]);
    ++firstArrayIndex;
  }
  while (secondArrayIndex !== arr2.length) {
    //to count operations
    ++count;
    sortedArr.push(arr2[secondArrayIndex]);
    ++secondArrayIndex;
  }
  return sortedArr;
}

export default function mergeSort(arr) {
  const middle = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; ++i) {
    if (i < middle) {
      //to count operations
      ++count;
      left.push(arr[i]);
    } else {
      //to count operations
      ++count;
      right.push(arr[i]);
    }
  }
  if (arr.length === 1) {
    return arr;
  }
  const leftArray = mergeSort(left);
  const rightArray = mergeSort(right);
  return merge(leftArray, rightArray);
}
