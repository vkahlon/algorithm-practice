// There is a function defination named solution with parameter statutes
function solution(statues) {
// the sort method of the statues object is being called with one argument, an arrow function with parameters, a and b, inside code block, we are returning the value of a and b and assigning to sortedArray.
  const sortArray = statues.sort((a, b) => {
    return a - b;
  });
  // assigning the number 0 to the let variable count
  let count = 0;
  // have a for statement, we are assigning 0 to the variable i, the condition: we are checking the length property of the sortArray object if it's greater than the value of i, then we are incrementing i
  for (let i = 0; i < sortArray.length; i++) {
    // if statement, checking if the sortArray at index = 1 subratracted by sortArray at index i is less than 1
    if (sortArray[i + 1] - sortArray[i] > 1) {
      // we are adding count and the value of the conditional
      count += sortArray[i + 1] - sortArray[i] - 1;
    }
  }
  // returning the value of the variable count
  return count;
}
const statues = [6, 2, 3, 8];
solution(statues);
