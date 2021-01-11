import { default as CONSTANTS } from './constants';

const arr = [...CONSTANTS.smallArray];
let count = 0;

inPlaceMergeSort(arr, 0, arr.length - 1);
console.log('In place merge sort takes', count, 'operations on array of length', arr.length);

export default function inPlaceMergeSort(arr, start = 0, end = arr.length -1) {
  if(start < end) {
    //to count operations
    ++count;
    let middle = start + Math.floor((end - start) / 2);
    inPlaceMergeSort(arr, start, middle);
    inPlaceMergeSort(arr, middle + 1, end,);
    let start2 = middle + 1;
    while(start <= middle && start2 <= end) {
      if(arr[start] <= arr[start2]) {
        //to count operations
        ++count;
        ++start;
      } else {
        let value = arr[start2];
        let index = start2;
        while(index !== start) {
          //to count operations
          ++count;
          arr[index] = arr[index - 1];
          --index;
        }
        arr[index] = value;
        ++start;
        ++middle;
        ++start2;
      }
    }
  }
};
