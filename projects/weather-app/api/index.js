const axios = require('axios');
const config = require('config');
const url = 'http://api.openweathermap.org/data/2.5/weather?q=';

const getCityWeather = (cityName) => {
    const apiCall = `${url}${cityName}&APPID=${config.get('API')}`;
    return axios.get(apiCall);
}

module.exports = getCityWeather;

