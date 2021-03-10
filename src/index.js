
exports.min = function min (array) {
  if (!array || !array.length) {
  return 0;
}
  let mini = Math.min(...array);
  return mini;
}

exports.max = function max (array) {
  if (!array || !array.length) {
  return 0;
}
  let maxi = Math.max(...array);
  return maxi;
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  }

  return array.reduce((a, b) => (a + b)) / array.length;
}
