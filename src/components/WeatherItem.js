import React from 'react'
import './WeatherItem.css'
import 'weathericons/css/weather-icons.css';
import Aux from '../hoc/AuxHoc';
import Modal from './UI/Modal/Modal';
import WeatherDetails from './WeatherDetails';

const WeatherItem = ({ setColorCardAndIcon, getDay, getWeatherInfo, weather, showDetails, showDetailsHandler, hideDetailsHandler, cityName, index}) => {
    const weatherInfo = getWeatherInfo(weather);
    const cardStyle = setColorCardAndIcon(weather);
    const dayName = getDay(weather);
    return (
        <Aux>
            <div className="col s12 m6 l3">
                <div className={"weather-card hoverable " + cardStyle[0]} onClick={showDetailsHandler.bind(this, index)}>
                    <div className="day-name">{dayName}</div>
                    <div className="weather-icon">
                        <i className={"wi " +  cardStyle[1]}></i>
                    </div>
                    <div className="weather-day-temp">{weatherInfo.maxTemperature}<span className="units">&#176;C</span></div>
                    <div className="weather-details">
                        <div className="weather-humidity">
                        <i className="wi wi-raindrop"></i>
                            {weatherInfo.avgHumidity} %
                        </div>
                        <div className="weather-windspeed">
                            <i className="wi wi-small-craft-advisory"></i>
                            {weatherInfo.avgWindSpeed} <span className="units">km/h</span>
                        </div>
                    </div>
                </div>
            </div>
        <Modal
            colorCard={cardStyle[0]}
            index={index}
            show={showDetails}
            modalClosed={hideDetailsHandler}>
            <WeatherDetails
                weatherInfo={weatherInfo}
                weather={weather}
                dayName={dayName}
                weatherIcon={cardStyle[1]}
                cityName={cityName}
                hideDetails={hideDetailsHandler}
                index={index} />
        </Modal>
        </Aux>
    )
}

export default WeatherItem
