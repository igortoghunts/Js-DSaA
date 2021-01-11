const arr = [5, 98, 564, 4, 9, 7, 6, 7];

const sortedArr = insertion(arr);
console.log('Insertion Sort', sortedArr);

export default function insertion(arr) {
  for (let i = 1, max = arr.length; i < max; i++){
    for (let j = i - 1; j >= 0; j--){
      if (arr[j] > arr[j+1]){
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
