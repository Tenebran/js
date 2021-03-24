module.exports.statisticsCount = obj => {
  let newObject = {};
  newObject.count = loadCount(obj);
  newObject.valuesTotalLength = arrayLenght(obj);
  newObject.uniqueValues = arrayUnique(obj);
  newObject.ArithmeticMean = arrayArithmetic(obj);
  return newObject;
};

const loadCount = obj => {
  return (count = Object.keys(obj).length);
};

const arrayLenght = obj => {
  let arrLenght = 0;
  for (key in obj) {
    arrLenght += obj[key].length;
  }

  return arrLenght;
};

const arrayUnique = obj => {
  let arrayUnique = [];
  for (key in obj) {
    arrayUnique = arrayUnique.concat(obj[key]);
  }
  let unique = [...new Set(arrayUnique)];
  return unique;
};

const arrayArithmetic = obj => {
  let arrayArithmetic = [];
  for (key in obj) {
    arrayArithmetic = arrayArithmetic.concat(obj[key]);
  }

  const newarrayArithmetic =
    arrayArithmetic.map(i => (x += i), (x = 0)).reverse()[0] / arrayArithmetic.length;
  return newarrayArithmetic.toFixed(2);
};
