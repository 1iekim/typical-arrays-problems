
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;
  else {
  let minVal = array[0];
  for (let i = 1; i < array.length; i++) if (array[i] < minVal) minVal = array[i];
  return minVal;}
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;
  else {
  let maxVal = array[0];
  for (let i = 1; i < array.length; i++) if (array[i] > maxVal) maxVal = array[i];
  return maxVal;}
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;
  else {
  let avgVal = 0;
  for (let i = 0; i < array.length; i++) avgVal += array[i];
  return avgVal/array.length;}
}
