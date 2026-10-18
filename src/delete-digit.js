const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  const value = String(n);

  for (let i = 0; i < value.length; i += 1) {
    let maxValue = Number(value.slice(0, i) + value.slice(i + 1));
    if (maxNumber < maxValue) {
      maxNumber = maxValue;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit,
};
