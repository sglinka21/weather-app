import React from 'react'
import './WeatherDetails.css'

const WeatherDetails = ({weatherInfo, weather, dayName, weatherIcon, cityName, hideDetails, index}) => {
  const getHourlyTemp = weather.map((item, index) => {
    return (
      <div className="weather-hour-list-item" key={index}>
        <div className="weather-hour-time">{item.dt_txt.substr(11, 5)}</div>
        <div className="weather-hour-temp">{Math.round(item.main.temp)}&#176;C</div>
      </div>
    );
  });

  return (
     <div className="weather-details-card">
        <div className="weather-details-day">
        <i className="material-icons close-btn" onClick={hideDetails.bind(this, index)}>close</i>
            <div className="weather-details-day-name">
              {dayName}
            </div>
            <div className="weather-details-day-icon">
              <i className={"wi " + weatherIcon}></i>
            </div>
            <div className="weather-details-day-temp">
                {weatherInfo.maxTemperature}<span className="units">&#176;C</span>
            </div>
            <h3 className="city-name">{cityName}</h3>
        </div>
        <div className="weather-hour-list">
            {getHourlyTemp}
        </div>
    </div>
  )
}

export default WeatherDetails