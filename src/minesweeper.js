const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(0),
  );

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      for (let x = i - 1; x <= i + 1; x += 1) {
        for (let y = j - 1; y <= j + 1; y += 1) {
          if (x === i && y === j) continue;
          if (matrix[x] !== undefined && matrix[x][y] !== undefined) {
            if (matrix[x][y] === true) {
              newMatrix[i][j] += 1;
            }
          }
        }
      }
    }
  }

  return newMatrix;
}

module.exports = {
  minesweeper,
};
