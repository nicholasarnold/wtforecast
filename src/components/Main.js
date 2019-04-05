import React from 'react';
//import { Route, Switch } from "react-router-dom";
import { useRoutes, useRedirect } from 'hookrouter';
import { WeatherToday } from './WeatherToday';
import { WeatherFiveDays } from './WeatherFiveDays';
import { WeatherHourly } from './WeatherHourly';
//import { SearchResults } from './SearchResults';
import { NoMatch } from './NoMatch';

const mainStyle = {
  marginBottom: '2%'
}

export const Main = () => {
  const defaultZip = '10001';
  const mainRoutes = {
    '/': () => <WeatherToday zipcode={defaultZip} />,
    '/zip/:zipcode': ({zipcode}) => <WeatherToday zipcode={zipcode} />,
    '/zip/:zipcode/5day': ({zipcode}) => <WeatherFiveDays zipcode={zipcode} />,
    '/zip/:zipcode/hourly': ({zipcode}) => <WeatherHourly zipcode={zipcode} />,
  };
    
  //useRedirect('/', `/zip/${defaultZip}`);

  return (
    <main style={mainStyle}>
      {useRoutes(routes) || <NoMatch />}
    </main>
  )
}