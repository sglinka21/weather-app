import React from 'react'

const WeatherItem = ({weather}) => {

    let style = {
        width: '60px',
        height: '60px'
    };

    return (
        <div className="col s12 m6 l3">
            <div className="card small hoverable blue lighten-3">
                <div className="card-title white-text">
                <span>{weather.day}</span>
            </div>
            <div className="card-content blue lighten-5">
                <img src="http://openweathermap.org/img/w/10d.png" style={style}  alt="" />
            </div>
            <div className="card-actio">
                    <p>Temp: {weather.temp}&#8451;</p>
                <p>Wind speed: {weather.windSpeed} km/h</p>
                <p>Humidity: {weather.humidity}%</p>
            </div>
            </div>
        </div>
  )
}

export default WeatherItem
