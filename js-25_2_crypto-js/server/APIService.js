const FileService = require('./FileService');

const getFsErrorHandler = (req, res) => errorText => {
  const errorResp = { status: 'Fail', statusText: '' };

  errorResp.statusText = errorText;
  res.send(errorResp);
};

module.exports.userData = (req, res) => {
  FileService.getUserFile()
    .then(fileData => res.send(JSON.parse(fileData)))
    .catch(getFsErrorHandler(req, res));
};

module.exports.userDataUpdate = (req, res) => {
  const updateData = req.body;
  if (updateData.constructor !== Object) {
    getFsErrorHandler(req, res)('Body is not object');
  }
  FileService.updateUserFile(updateData)
    .then(() => res.send({ status: 'Success', statusText: 'File updated' }))
    .catch(getFsErrorHandler(req, res));
};

module.exports.userCheck = (req, res) => {
  FileService.getUserCheck()
    .then(fileCheck => res.send(fileCheck))
    .catch(getFsErrorHandler(req, res));
};
