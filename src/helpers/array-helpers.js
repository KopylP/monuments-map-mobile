export const arraysAreEquals = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

export const groupBy = function(xs, key) {
  const groupObject = xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  var groupArray = [];
  for(let key in groupObject) {
    groupArray.push({
      key,
      values: groupObject[key] 
    });
  }
  return groupArray;
};