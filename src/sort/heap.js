import { default as CONSTANTS } from './constants';

const arr = [...CONSTANTS.smallArray];
let count = 0;

heapSort(arr);
console.log('Heap sort takes', count, 'operations on array of length', arr.length);

function swap(arr, index1, index2) {
  //to count operations
  ++count;
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function heapify(arr, index, length) {
  //to count operations
  ++count;
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;
  let max = index;
  if (leftIndex < length && arr[leftIndex] > arr[max]) {
    max = leftIndex;
  }
  if (rightIndex < length && arr[rightIndex] > arr[max]) {
    max = rightIndex;
  }
  if (max !== index) {
    swap(arr, index, max);
    heapify(arr, max, length);
  }
}

function maxHeap(arr, length) {
  /**
   * We start from last non-leaf child
   * Which is always Math.floor(arr.length/2) - 1
   */
  const lastNonLeaf = Math.floor(length / 2) - 1;
  for (let i = lastNonLeaf; i >= 0; --i) {
    heapify(arr, i, length);
  }
  for (let i = length - 1; i > 0; --i) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
}

export default function heapSort(arr) {
  const length = arr.length;
  maxHeap(arr, length);
};
