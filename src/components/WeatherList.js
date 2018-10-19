import React from 'react'
import WeatherItem from './WeatherItem';
import Spinner from './Spinner/Spinner';

const WeatherList = ({weathers, isLoading, showDetails}) => {
    let weatherList = null;
    if(!isLoading) {
        weatherList = weathers.map(weather => {
            return (
                <WeatherItem
                    weather={weather}
                    showDetails={showDetails}
                    key={weather.id} />
            );
        });
    } else {
        weatherList = <Spinner/>;
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
