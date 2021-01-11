/**
 * Fibonacci numbers Nth element Fn = Fn-2 + Fn-1
 	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10
 	1	  1	  2	  3	  5	  8	  13	21	34  55
 */

const N = 10;
// Don't use this one unless you like it hard way
// const fibN = fib(N);
const fibN = fibDP(N);
console.log('Fibonacci of N =', N, ' -> ', fibN);

/**
 * Fibonacci sequence using recursion
 * very slow
 * Time complexity O(2^n)
 * Space complexity O(n)
 */
export function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 2) + fib(n - 1);
}


/**
 * Fibonacci sequence using recursion with Memoization
 * very fast
 * Time complexity O(n)
 * Space complexity O(n + n) -> O(n)
 */

export function fibDP(n, memo={}) {
  if(n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;
  memo[n] = fibDP(n - 2, memo) + fibDP(n - 1, memo);
  return memo[n];
}
