const fs = require('fs');
var CryptoJS = require('crypto-js');
const userDataPath = __dirname + '/data/User.json';

const directory = './logs/';

let NewReadfile = {};
const readFile = fs.readFile(userDataPath, 'utf8', (err, data) => {
  if (err) throw err;
  NewReadfile = data;
});
const LOG_FILE_PATH = './logs/logs.txt'; // лютый хардкод

function logMiddleware(req, res, next) {
  const data = new Date();
  const LOG_FILE_PATH1 = `./logs/${data.getHours()}_${data.getMinutes()}_${data.getSeconds()}.txt`;

  var ciphertext = CryptoJS.AES.encrypt(
    `${req.method} ${req.originalUrl} ${new Date()} ${NewReadfile} \n`,
    'secret key 123'
  ).toString();
  fs.writeFile(
    LOG_FILE_PATH1,
    ciphertext,

    err => {
      if (err) {
        console.log(err);
      }
    }
  );
  next();
}

const getLog = (req, res) => {
  let data = fs.readFileSync(LOG_FILE_PATH, 'utf8');

  res.send(data);
};

const geAllTexttLog = (req, res) => {
  let LOG_FILES = '';
  let cryptotext;
  let originalTex = ``;
  fs.readdir(directory, (err, files) => {
    files.map(file => {
      LOG_FILES = fs.readFileSync(`./logs/${file}`, 'utf8');
      cryptotext = CryptoJS.AES.decrypt(LOG_FILES, 'secret key 123');
      originalTex += cryptotext.toString(CryptoJS.enc.Utf8);
    });
    res.send(originalTex);
  });
};

module.exports = { logMiddleware, getLog, geAllTexttLog };
