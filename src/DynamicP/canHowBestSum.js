/**
 * Given Number N and array of Numbers nums[]
 * Find if N can be sum of nums
 * Each number in nums can be used unlimited times
 * N, nums[] > 0
 */

const N = 1000;
const nums = [7, 13, 19, 1001];
const canSumN = howSum(N, nums);
console.log(`N = ${N} ${canSumN? 'can': 'can not'} be summed by given array [${nums}]`);
const howSumN = howSum(N, nums);
if(howSumN) {
  console.log(`N = ${N} is summed by using numbers [${howSumN}]`);
} else {
  console.log(`N = ${N} can not be summed using numbers in array [${nums}]`)
}
const bestSumN = bestSum(N, nums);
if(bestSumN) {
  console.log(`N = ${N} is summed by using minimum numbers [${bestSumN}]`);
} else {
  console.log(`N = ${N} can not be summed using numbers in array [${nums}]`)
}

export function canSum(N, nums, memo = {}) {
  if (N in memo) return memo[N];
  if (N < 0) return false;
  if (N === 0) return true;
  for (let num of nums) {
    const remainder = N - num;
    if (canSum(remainder, nums, memo) === true) {
      memo[N] = true;
      return true;
    }
  }
  memo[N] = false;
  return false;
}

export function howSum(N, nums, memo = {}) {
  if (N in memo) return memo[N];
  if (N < 0) return null;
  if (N === 0) return [];
  for (let num of nums) {
    const remainder = N - num;
    const remainderResult = howSum(remainder, nums, memo);
    if (remainderResult !== null) {
      memo[N] = [...remainderResult, num];
      return memo[N];
    }
  }
  memo[N] = null;
  return null;
}

export function bestSum(N, nums, memo = {}) {
  if (N in memo) return memo[N];
  if (N < 0) return null;
  if (N === 0) return [];
  let shortestAns = null;
  for(let num of nums) {
    const remainder = N - num;
    const remainderResult = bestSum(remainder, nums, memo);
    if(remainderResult !== null) {
      if(shortestAns === null || (remainderResult.length < shortestAns.length)) {
        shortestAns = [...remainderResult, num];
      }
      memo[N] = shortestAns;
    }
  }
  return shortestAns;
}
