const TelegrammBot = require('node-telegram-bot-api');
const TOKEN = '1678715011:AAEUlDRxZoyUQaxYUx84etCV2SsSYmsh_G0';
const kb = require('./keyboards');
const keaboardWindow = require('./keyboardWindow');
const { weather } = require('./keyboardWindow');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 6060;
const API_WEATCHER = 'http://localhost:4040/current/weather';
const API_FORECAST_WEATCHER = 'http://localhost:4040/forecast/weather';

const bot = new TelegrammBot(TOKEN, {
  polling: {
    interval: 300,
    autoStrat: true,
    params: {
      timeout: 10,
    },
  },
});

app.get('/weather/:city', (req, res) => {
  fetch(`http://localhost:4040/weather/London`)
    .then(resp => resp.json())
    .then(data => res.json(data));
});

bot.onText(/\/weather/, msg => {
  const { id } = msg.chat;
  bot.sendMessage(
    id,
    `Привет, ${msg.from.first_name}  Для Начала поиска погоды нажми на кнопку Погода:`,
    {
      reply_markup: {
        keyboard: keaboardWindow.home,
      },
    }
  );

  bot.on('message', msg => {
    const { id } = msg.chat;
    let myLittleText = '';

    if (msg.text) {
      let city = msg.text.replace(/[^a-z]/g, '');
      let numEl = parseInt(msg.text.match(/\d+/));

      if (numEl === 1) {
        currentWeather(API_WEATCHER, city, id);
      } else if (numEl === 2) {
        forecastWeather(API_FORECAST_WEATCHER, city, id);
      } else {
        bot.sendMessage(
          id,
          `1) Вводиться город только латинскими буквами, 
2) Прогноз за 1 день цифра 1 , за 5 цифра 2, 
3) Пример Ввода "1 Odessa `,
          {
            reply_markup: {
              hide_keyboard: true,
            },
          }
        );
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
////////////////////////////////
const currentWeather = (ApiAdrress, userMessage, id) => {
  return fetch(`${ApiAdrress}/${userMessage}`)
    .then(resp => resp.json())
    .then(
      data =>
        bot.sendLocation(id, data.coord.lat, data.coord.lon) &&
        bot.sendMessage(
          id,
          `       Погода в Городе ${userMessage} Составляет: ${JSON.stringify(
            data.main.temp
          )} градуса
Масимальная Температура сегодня Составит: ${JSON.stringify(data.main.temp_max)}c
Минимальная Температура сегодня Составит: ${JSON.stringify(data.main.temp_min)}c
Погода Ощущаеться Как: ${JSON.stringify(data.main.feels_like)}c
Так же Ветер Составляет: ${JSON.stringify(data.wind.speed)}Км в час
          `
        )
    )
    .catch(error =>
      error === userMessage
        ? bot.sendMessage(
            id,
            `Введите город правильно Используйте Латинские буквы!!!!!
  Этот Запрос Неправильный "${userMessage}"`
          )
        : null
    );
};

const forecastWeather = (ApiAdrress, userMessage, id) => {
  return fetch(`${ApiAdrress}/${userMessage}`)
    .then(resp => resp.json())
    .then(data =>
      bot.sendMessage(
        id,
        bot.sendLocation(id, data.city.coord.lat, data.city.coord.lon) &&
          `Погода в Городе ${userMessage.toUpperCase()}` +
            JSON.stringify(
              data.list.map(data => ` В ${data.dt_txt} Будет: ${data.main.temp}c`),
              null,
              '\t'
            ).replace(/\[|\]|\/^"|"/g, '')
      )
    )
    .catch(error =>
      error === userMessage
        ? bot.sendMessage(
            id,
            `Введите город правильно Используйте Латинские буквы!!!!!
Этот Запрос Неправильный "${userMessage}"`
          )
        : null
    );
};
