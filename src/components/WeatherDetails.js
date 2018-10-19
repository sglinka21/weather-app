import React from 'react'
import './WeatherDetails.css'

const WeatherDetails = (props) => {
  return (
     <div className="weather-details-card">
        <div className="weather-details-day">
        <i className="material-icons close-btn" onClick={props.hideDetails}>close</i>
            <div className="weather-details-day-name">
              Tue
            </div>
            <div className="weather-details-day-icon">
              <i className="wi wi-day-lightning"></i>
            </div>
            <div className="weather-details-day-temp">
                30<span className="units">&#176;C</span>
            </div>
            <h3 className="city-name">London</h3>
        </div>
        <div className="weather-hour-list">
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
            <div className="weather-hour-list-item">
              <div className="weather-hour-time">10:00</div>
              <div className="weather-hour-temp">30&#176;C</div>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails