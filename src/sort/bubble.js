const arr = [98, 65, 32, 21, 11, 9, 8, 7, 5, 2, 1, 0];

const sortedArr = bubbleSort(arr);

console.log('bubble sort', sortedArr);

/**
 * Bubble sort.
 */
export default function bubbleSort(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0, max = arr.length - 1; i < max; i++) {
      if (arr[i] > arr[i + 1]) {
        arr[i] += arr[i + 1];
        arr[i + 1] = arr[i] - arr[i + 1];
        arr[i] -= arr[i + 1];
        isSorted = false;
      }
    }
  }

  return arr;
}
