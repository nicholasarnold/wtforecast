import React, { useState, useEffect } from 'react';
import { OpenWeather } from '../util/api';
import { getWeatherIcon } from '../weather.icons';
import { getWeatherInsult } from '../weather.insults';
import { getFahrenheitFromKelvin, getWindDirectionFromDegree } from '../helper.functions';

export const WeatherToday = props => {
  const { zipcode } = props;
  const [weather, setWeather] = useState({}); 

  useEffect(() => {
    OpenWeather.getCurrentConditionsByZipCode(zipcode)
    .then(response => {
      const { main, name, weather, wind } = response;
      setWeather({
        locationName: name,
        currentTemperature: getFahrenheitFromKelvin(main.temp),
        conditions: weather[0].main,
        insult: getWeatherInsult(weather[0].icon),
        icon: getWeatherIcon(weather[0].icon),
        windSpeed: wind.speed,
        windDirection: getWindDirectionFromDegree(wind.deg)
      });
    });
  }, [zipcode]);

  return (
    <div className="WeatherToday jumbotron">
      <h4 className="display-4">{weather.insult}</h4>
      <h4>Right now in <span className="font-weight-bold">{weather.locationName}</span>: {weather.icon} {weather.conditions}</h4>
      <h2 className="display-2">{weather.currentTemperature}&deg; F</h2>
      <h4><i className="fas fa-wind"></i> {weather.windSpeed} mph {weather.windDirection}</h4>
    </div>
  )
}