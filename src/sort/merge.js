const arr = [98, 65, 4, 125];

const sortedArr = mergeSort(arr, 0, arr.length - 1);

console.log('merge sort', sortedArr);

/**
 * Merge sort.
 */

function merge(arr1, arr2) {
  const sortedArr = [];
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;
  while (firstArrayIndex < arr1.length && secondArrayIndex < arr2.length) {
    if (arr1[firstArrayIndex] < arr2[secondArrayIndex]) {
      sortedArr.push(arr1[firstArrayIndex]);
      ++firstArrayIndex;
    } else {
      sortedArr.push(arr2[secondArrayIndex]);
      ++secondArrayIndex;
    }
  }
  while (firstArrayIndex !== arr1.length) {
    sortedArr.push(arr1[firstArrayIndex]);
    ++firstArrayIndex;
  }
  while (secondArrayIndex !== arr2.length) {
    sortedArr.push(arr2[secondArrayIndex]);
    ++secondArrayIndex;
  }
  return sortedArr;
}

export default function mergeSort(arr) {
  console.log('mergeSort', arr);
  const middle = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; ++i) {
    if (i < middle) {
      left.push(arr[i]);
    } else {
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
