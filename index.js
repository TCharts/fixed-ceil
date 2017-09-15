/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */


/**
 * 向上取整，可以指定小数位
 * @param number
 * @param fixed
 * @returns {number}
 */
function fixedCeil(number, fixed) {
  if (!fixed) {
    fixed = 0;
  }
  // 输入必须为数字
  if (typeof number !== 'number' || typeof fixed !== 'number')
    throw new Error('Parameters should be type of number!');
  // fixed 必须为整数
  if (fixed % 1 !== 0)
    throw new Error('Parameter `fixed` should be an integer!');

  if (fixed === 0) return Math.ceil(number);
  var t = Math.pow(10, fixed);
  return Math.ceil(number * t) / t;
}

module.exports = fixedCeil;
