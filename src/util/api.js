import axios from 'axios';
import { apiKey } from './api.key';
// Get an API Key here: https://openweathermap.org/api

export const OpenWeather = {
  baseUrl: 'http://api.openweathermap.org/data/2.5/',

  getCurrentConditionsByZipCode(zipcode) {
    return axios.get(`${this.baseUrl}weather?zip=${zipcode}&appid=${apiKey}`)
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
    });
  },

  getFiveDayForecastByZipCode(zipcode) {
    return axios.get(`${this.baseUrl}forecast?zip=${zipcode}&appid=${apiKey}`)
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
    });
  },

  getHourlyForecastByZipCode(zipcode) {
    return axios.get(`${this.baseUrl}forecast/hourly?zip=${zipcode}&appid=${apiKey}`)
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
    });
  }
}