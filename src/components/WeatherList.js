import React from 'react'
import WeatherItem from './WeatherItem';
import Spinner from './Spinner/Spinner';

const WeatherList = ({weathers, isLoading}) => {
    let weatherList = <Spinner />;
    if(isLoading) {
        weatherList = weathers.map(weather => {
            return (
                <WeatherItem
                    weather={weather}
                    key={weather.id} />
            );
        });
    }

    return (
        <div className="container">
            <div className="row">
                {weatherList}
            </div>
        </div>
    )
}

export default WeatherList
