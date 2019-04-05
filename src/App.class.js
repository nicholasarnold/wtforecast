import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { OpenWeather } from './util/api';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      weatherData: {}
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    const pathArray = path.split('/zip/');
    const zipcode = pathArray[1] || 10001;
    OpenWeather.getWeatherByZipCode(zipcode)
    .then(weatherData => {
      this.setState({
        isLoading: false,
        weatherData: weatherData
      });
    });
  }

  render() {
    return (
        <div className="App container">
          <Router>
            <Header />
            {(!this.state.isLoading) ? <Main weatherData={this.state.weatherData} /> : <Loading />}
            <Footer />
          </Router>
        </div>
    );
  }
}

export default App;