const arr = [1, 2, 3, 4, 9, 12, 124, 5456];
const x = 12;

const isFind = binarySearch(arr, x);

console.log('binary search', isFind);

/**
 * Binary search.
 * */
export default function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let answer = -1;

  while (end - start !== 1) {
    let index = Math.floor(start + (end - start) / 2);
    let currentValue = arr[index];

    if (currentValue === x) {
      answer = index;
      break;
    }

    if (currentValue < x) {
      start = index;
    } else {
      end = index;
    }
  }
  return answer;
}
