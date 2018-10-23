import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiKey = "70e761deab5dc24b5dab296b23a43ee5";

export const setWeatherData = (weather) => {
    return {
        type: actionTypes.SET_WEATHER_DATA,
        weather: weather
    }
};

export const fetchWeatherDataFailed = () => {
    return {
        type: actionTypes.FEATCH_WEATHER_DATA_FAILED
    }
}

export const fetchWeatherData = (cityName) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&q=${cityName}`;
    return dispatch => {
        axios.get(apiUrl)
            .then(response => {
                dispatch(setWeatherData(response.data));
            })
            .catch(error => {
                dispatch(fetchWeatherDataFailed());
            });

    }
}