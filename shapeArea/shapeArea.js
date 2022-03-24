// Define a function named solution that takes one parameter one
// have a if condition checking if parameter n is strictly to equal one, if truthy, return the number one.
// Return squared of n plus the return of n subtracted by one, squared the solution.
function solution(n) {
  if (n === 1) {
    return 1;
  }
  return n ** 2 + (n - 1) ** 2;
}
solution(2);
