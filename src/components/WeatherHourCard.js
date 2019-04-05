import React from 'react';
import {
  formatDateAndTime,
  getFahrenheitFromKelvin,
  getWindDirectionFromDegree 
} from '../helper.functions';
import { getWeatherIcon } from '../weather.icons';

//var offset = (new Date().getTimezoneOffset()) / 60;
//console.log(offset);

const hourCardStyle = {
  marginBottom: '2%'
}

export const WeatherHourCard = props => {
  const { dt_txt, main, weather } = props.weatherData;

  const currentTemperature = getFahrenheitFromKelvin(main.temp);
  const weatherConditions = weather[0].main;
  const weatherIcon = getWeatherIcon(weather[0].icon);
  const dateAndTime = formatDateAndTime(dt_txt);

  return (
    <div className="WeatherHourly row" style={hourCardStyle}>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{currentTemperature}&deg; F</h5>
            <p className="card-text">{weatherIcon} {weatherConditions}</p>
            <p className="card-text"><small className="text-muted">{dateAndTime} EDT</small></p>
          </div>
          {/* <img className="card-img-bottom" src="..." alt="Card cap" /> */}
        </div>
      </div>
    </div>
  )
}