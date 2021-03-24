const express = require('express');
const PersonService = require('./Person.service');
const app = express();
const port = 7070;

app.use(express.static(__dirname + './../'));

app.all('*', (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get('/person', PersonService.getPerson);
app.get('/person/:personData', PersonService.getPersonData);

//

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
