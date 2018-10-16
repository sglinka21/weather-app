import React from 'react'
import './WeatherItem.css'
import 'weathericons/css/weather-icons.css';

const WeatherItem = ({weather}) => {
    return (
        <div className="col s12 m6 l3">
            <div className="weather-card rain hoverable">
                <div className="day-name">Tue</div>
                <div className="weather-icon">
                    <i className="wi wi-day-lightning"></i>
                </div>
                <div className="weather-day-temp">30<span className="units">&#176;C</span></div>
                <div className="weather-details">
                    <div className="weather-humidity">
                        <i className="wi wi-raindrop"></i>
                        15 %
                    </div>
                    <div className="weather-windspeed">
                        <i className="wi wi-small-craft-advisory"></i>
                        30 <span className="units">km/h</span>
                    </div>
                </div>
            </div>
        </div>
        /* <div className="col s12 m6 l3">
            <div className="card small hoverable blue lighten-3">
                <div className="card-title white-text">
                <span>{weather.day}</span>
            </div>
            <div className="card-content blue lighten-5">
                <img src="http://openweathermap.org/img/w/10d.png" style={style}  alt="" />
            </div>
            <div className="card-action">
                <p>Temp: {weather.temp}&#8451;</p>
                <p>Wind speed: {weather.windSpeed} km/h</p>
                <p>Humidity: {weather.humidity}%</p>
            </div>
            </div>
        </div> */
  )
}

export default WeatherItem
