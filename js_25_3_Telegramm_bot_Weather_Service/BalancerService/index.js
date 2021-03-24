const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const port = 4040;

const openWeatherConfig = {
  protocol: 'http://',
  domain: 'api.openweathermap.org',
  resourseBase: '/data/2.5',
  API_KEY: '552fdd050682d4246694f7af40e8d829',
};
const { protocol, domain, resourseBase, API_KEY } = openWeatherConfig;
const openWeatherPath = `${protocol}${domain}${resourseBase}`;

fetch(`${openWeatherPath}/weather?appid=${API_KEY}&units=metric&q=Dnipro`)
  .then(resp => resp.json())
  .then(data => console.log(data.main.feels_like));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + './../'));

app.all('*', (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);

  next();
});

app.get('/current/weather/:city', (req, res) => {
  fetch(`${openWeatherPath}/weather?appid=${API_KEY}&units=metric&q=${req.params.city}`)
    .then(resp => resp.json())
    .then(data => res.json(data));
});

app.get('/forecast/weather/:city', (req, res) => {
  fetch(`${openWeatherPath}/forecast?appid=${API_KEY}&units=metric&q=${req.params.city}`)
    .then(resp => resp.json())
    .then(data => res.json(data));
});

app.get('/generate/number', (req, res) => {
  const number = Math.floor(Math.random() * 1200);
  res.send(JSON.stringify(number));
});

app.get('/generate/array', (req, res) => {
  let array = [];
  array.length = Math.floor(Math.random() * 100);

  for (let i = 0; i < array.length; i++) {
    const number = Math.floor(Math.random() * 12000);
    array[i] = number;
  }
  res.send(JSON.stringify(array));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
