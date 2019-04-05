import React, { useState, useEffect } from 'react';
import { OpenWeather } from '../util/api';
import { WeatherHourCard } from './WeatherHourCard';

export const WeatherHourly = props => {
  const { zipcode } = props;

  const [locationName, setLocationName] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  
  useEffect(() => {
    OpenWeather.getHourlyForecastByZipCode(zipcode)
    .then(response => {
      const { city, list } = response;
      setLocationName(city.name);
      setWeatherData(list.slice(0, 12));
    });
  }, [zipcode]);
  
  return (
    <div className="WeatherFiveDays">
      <h4>The next 12 hours in {locationName}</h4>
      {weatherData.map(hourData => {
        return (
          <WeatherHourCard key={hourData.dt} weatherData={hourData} />
        )
      })}
    </div>
  )
}