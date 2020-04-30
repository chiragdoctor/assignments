const axios = require('axios');
const apiKey = require('../config/apiKey');

const getCityWeather = (cityName) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const apiCall = `${url}${cityName}&APPID=${apiKey}`;
    return axios.get(apiCall);
}

module.exports = getCityWeather;

