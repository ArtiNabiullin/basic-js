const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        result += count + str[i];
      }
      if (count === 1) {
        result += str[i];
      }
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
