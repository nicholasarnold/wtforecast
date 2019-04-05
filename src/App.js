import React from 'react';
import { useRoutes } from 'hookrouter';
import { Header } from './components/Header';
import { WeatherToday } from './components/WeatherToday';
import { WeatherFiveDays } from './components/WeatherFiveDays';
import { WeatherHourly } from './components/WeatherHourly';
import { Footer } from './components/Footer';
import { NoMatch } from './components/NoMatch';

const mainStyle = {
  marginBottom: '2%'
}

const App = () => {
  const defaultZip = '10001';

  const headerRoutes = {
    '/': () => <Header zipcode={defaultZip} />,
    '/zip/:zipcode': ({zipcode}) => <Header zipcode={zipcode || defaultZip} />,
    '/zip/:zipcode/:active': ({zipcode, active}) => <Header zipcode={zipcode} active={active} />
  }

  const mainRoutes = {
    '/': () => <WeatherToday zipcode={defaultZip} />,
    '/zip/:zipcode': ({zipcode}) => <WeatherToday zipcode={zipcode} />,
    '/zip/:zipcode/today': ({zipcode}) => <WeatherToday zipcode={zipcode} />,
    '/zip/:zipcode/5days': ({zipcode}) => <WeatherFiveDays zipcode={zipcode} />,
    '/zip/:zipcode/hourly': ({zipcode}) => <WeatherHourly zipcode={zipcode} />,
  };
  
  return (
      <div className="App container">
        {useRoutes(headerRoutes)}
        <main style={mainStyle}>
          {useRoutes(mainRoutes) || <NoMatch />}
        </main>
        <Footer />
      </div>
  );
}

export default App;