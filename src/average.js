const average = (array) => {
  const arrayLength = array.length;
  if (array.length === 0) {
    return undefined;
  }
  const values = Object.values(array);
  let sumOfValues = 0;

  for (let value of values) {
    if (typeof value !== 'number') {
      return undefined;
    }
    sumOfValues += value;
  }

  return Math.round(sumOfValues / arrayLength);
};

const array = [-11, -5, 2];

module.exports = average;
