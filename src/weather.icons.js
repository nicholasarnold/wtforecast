import React from 'react';

// returns font awesome tag based on weather type
export const getWeatherIcon = iconCode => {
  switch (iconCode) {
    case '01d':
      return <i className="fas fa-sun"></i>;
    case '02d':
      return <i className="fas fa-cloud-sun"></i>;
    case '03d':
      return <i className="fas fa-cloud-sun"></i>;
    case '04d':
      return <i className="fas fa-cloud"></i>;
    case '09d':
      return <i className="fas fa-cloud-showers-heavy"></i>;
    case '10d':
      return <i className="fas fa-cloud-sun-rain"></i>;
    case '11d':
      return <i className="fas fa-bolt"></i>;
    case '13d':
      return <i className="far fa-snowflake"></i>;
    case '50d':
      return <i className="fas fa-smog"></i>;
    case '01n':
      return <i className="fas fa-moon"></i>;
    case '02n':
      return <i className="fas fa-cloud-moon"></i>;
    case '03n':
      return <i className="fas fa-cloud-moon"></i>;
    case '04n':
      return <i className="fas fa-cloud"></i>;
    case '09n':
      return <i className="fas fa-cloud-showers-heavy"></i>;
    case '10n':
      return <i className="fas fa-cloud-moon-rain"></i>;
    case '11n':
      return <i className="fas fa-bolt"></i>;
    case '13n':
      return <i className="far fa-snowflake"></i>;
    case '50n':
      return <i className="fas fa-smog"></i>;
    default:
      return '';
  }
}