const fs = require('fs');
const userDataPath = __dirname + '/data/User.json';
const FileService = require('./FileStatistics');

const fileCreation = dataJson => {
  return new Promise((resolve, reject) => {
    fs.writeFile(userDataPath, dataJson, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve();
    });
  });
};

module.exports.getUserFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(userDataPath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports.updateUserFile = inComeData => {
  return this.getUserFile()
    .then(userData => {
      return { ...JSON.parse(userData), ...inComeData };
    })
    .then(newUserdata => {
      return fileCreation(JSON.stringify(newUserdata, null, '\t'));
    });
};

module.exports.getUserCheck = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(userDataPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(FileService.statisticsCount(JSON.parse(data)));
      }
    });
  });
};
