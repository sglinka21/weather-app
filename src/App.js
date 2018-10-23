import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SearchForm from './container/SearchFrom';
import WeatherResult from './container/WeatherResult';

class App extends Component {

  render() {

    const { weather } = this.props.weather;
    const weatherResult = (weather === null) ? (null) : (<WeatherResult weatherData={weather} />)
    return (
      <div className="App">
          <SearchForm />
          {weatherResult}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    error: state.error
  }
}

export default connect(mapStateToProps, null)(App)
