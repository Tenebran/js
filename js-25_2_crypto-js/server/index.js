const express = require('express');
const bodyParser = require('body-parser');

const APIService = require('./APIService');
const logService = require('./log.service');

const app = express(); // constructor
const port = 7070;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + './../'));

app.all('*', (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);

  next();
});

app.get('/logs/log', logService.getLog);
app.get('/data/get', logService.geAllTexttLog);
app.get('/user/data', APIService.userData);
app.post('/data/update', logService.logMiddleware, APIService.userDataUpdate);
app.get('/data/status-check', APIService.userCheck);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
