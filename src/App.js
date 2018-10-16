import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchFrom';
import WeatherList from './components/WeatherList';
import Modal from './components/UI/Modal/Modal';
import WeatherDetails from './components/WeatherDetails';

class App extends Component {
  state = {
    city: '',
    weather: [
      { id: 1, day: '10/10/2018', temp: 30, windSpeed: 30, humidity: 20 },
      { id: 2, day: '11/10/2018', temp: 31, windSpeed: 20, humidity: 50 },
      { id: 3, day: '12/10/2018', temp: 32, windSpeed: 10, humidity: 10 },
      { id: 4, day: '13/10/2018', temp: 31, windSpeed: 34, humidity: 25 }
    ],
    isLoading: true
  }

  addCity = (city) => {
    this.setState({
      city
    });
  }

  render() {
    return (
      <div className="App">
          <Modal>
          {/* <WeatherDetails /> */}
          </Modal>
          <SearchForm
            addCity={this.addCity}
          />
          <WeatherList
            weathers={this.state.weather}
            isLoading={this.state.isLoading}/>
      </div>
    );
  }
}

export default App;
