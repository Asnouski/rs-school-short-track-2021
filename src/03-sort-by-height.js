/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrSort = arr.filter((elem) => elem > 0).sort((g, t) => g - t);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) newArr.push(-1);
    else {
      newArr.push(arrSort[0]);
      arrSort.splice(0, 1);
    }
  }
  return newArr;
}

module.exports = sortByHeight;
