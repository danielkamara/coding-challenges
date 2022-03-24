/*   Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line 
of two space-separated long integers.
 */

function miniMaxSum(arr) {
  // Write your code here

  let min = arr
    .sort((a, b) => a - b)
    .slice(0, 4)
    .reduce((prev, curr) => prev + curr);
  let max = arr
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((prev, curr) => prev + curr);

  // return Number(min) + "" + Number(max)
  console.log(min, max);
}
