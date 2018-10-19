import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchFrom';
import WeatherList from './components/WeatherList';
import Modal from './components/UI/Modal/Modal'
import WeatherDetails from './components/WeatherDetails'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    city: '',
    weather: [
      { id: 1, day: '10/10/2018', temp: 30, windSpeed: 30, humidity: 20 },
      { id: 2, day: '11/10/2018', temp: 31, windSpeed: 20, humidity: 50 },
      { id: 3, day: '12/10/2018', temp: 32, windSpeed: 10, humidity: 10 },
      { id: 4, day: '13/10/2018', temp: 31, windSpeed: 34, humidity: 25 }
    ],
    isLoading: false,
    showDetailsWeather: false
  }

  addCity = (city) => {
    this.setState({
      city
    });
  }

  showDetailsWeatherHandler = () => {
    this.setState({showDetailsWeather: true});
  }
  
  hideDetailsWeatherHandler = () => {
    this.setState({showDetailsWeather: false});
  }

  render() {
    return (
      <div className="App">
          <Modal 
            show={this.state.showDetailsWeather}
            modalClosed={this.hideDetailsWeatherHandler}>
            <WeatherDetails 
              hideDetails={this.hideDetailsWeatherHandler}/>
          </Modal>
          <SearchForm
            addCity={this.addCity}
          />
          <WeatherList
            weathers={this.state.weather}
            isLoading={this.state.isLoading}
            showDetails={this.showDetailsWeatherHandler}
            />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, null)(App)
