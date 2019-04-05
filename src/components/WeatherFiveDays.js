import React, { useState, useEffect } from 'react';
import { OpenWeather } from '../util/api';
import { WeatherDayCard } from './WeatherDayCard';

export const WeatherFiveDays = props => {
  const { zipcode } = props;

  const [locationName, setLocationName] = useState('');
  
  useEffect(() => {
    OpenWeather.getFiveDayForecastByZipCode(zipcode)
    .then(response => {
      console.log(response);
      const { main, name, weather, wind } = response;
      setLocationName(name);
    });
  }, [zipcode]);

  return (
    <div className="WeatherFiveDays row">
      <WeatherDayCard />
      <WeatherDayCard />
      <WeatherDayCard />
      <WeatherDayCard />
      <WeatherDayCard />
    </div>
  )
}