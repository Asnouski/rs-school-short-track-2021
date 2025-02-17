/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const column = matrix[0].length;
  const arr = [];
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) break;
      else arr.push(matrix[j][i]);
    }
  }
  return arr.reduce((sum, elem) => sum + elem, 0);
}

module.exports = getMatrixElementsSum;
