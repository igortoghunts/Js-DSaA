/**
 * In a rectangle of N x M calculate how many ways we can travel bottom-left to top-right corner.
 * We can travel only Up or Right
 * Ex.
 * gridTravel(2,2) = 2
 * right -> up, up -> right
 * gridTravel(3,3) =
 */

const N = 3;
const M = 3;
// Don't use this one unless you like it hard way
// const inHowManyWays = gridTravel(N, M);
const inHowManyWays = gridTravelDP(N, M);
console.log(`In a rectangle of size ${N} x ${M} you can travel ${inHowManyWays} ways from bottom-left to top-right.`);

/**
 * Counting ways using recursion
 * very slow
 * Time complexity O(2^n+m)
 * Space complexity O(n+m)
 */
export function gridTravel(n, m) {
  if(n === 1 && m === 1) return 1;
  if(n === 0 || m === 0) return 0;
  return gridTravel(n-1, m) + gridTravel(n, m-1);
}

/**
 * Counting ways using recursion
 * very slow
 * Time complexity O(n * m)
 * Space complexity O(n * m)
 */
export function gridTravelDP(n, m, memo = {}) {
  const key = n + '' + m;
  if(key in memo) return memo[key];
  if(n === 1 && m === 1) return 1;
  if(n === 0 || m === 0) return 0;
  memo[key] = gridTravelDP(n-1, m, memo) + gridTravelDP(n, m-1, memo);
  return memo[key];
}
