import React, { Component } from 'react'
import WeatherItem from '../components/WeatherItem';

export class WeatherResult extends Component {

    state = {
        showWeatherDetails: {},
    }

    showWeatherDetailsHandler = (id) => {
        this.setState({
            showWeatherDetails: {
                [id]: true
            }
        });
    }

    hideWeatherDetailsHandler = (id) => {
        this.setState({
            showWeatherDetails: {
                [id]: false
            }
        });
    }

    groupByDays = (data) => {
        return (data.reduce((list, item) => {
            const forecastDays = item.dt_txt.substr(0, 10);
            list[forecastDays] = list[forecastDays] || [];
            list[forecastDays].push(item);

            return list;
        }, {}));
    }

    getDayName = (data) => {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
    }

    getWeatherInfo = (data) => {
        const temperature = [];
        const humidity = [];
        const windSpeed = [];
        data.map(el => {
            temperature.push(el.main.temp);
            humidity.push(el.main.humidity);
            windSpeed.push((el.wind.speed * 3.6));
        });

        const maxTemperature = Math.round(Math.max(...temperature));
        const avgHumidity = Math.round(humidity.reduce((current, next) => current + next) / humidity.length);
        const avgWindSpeed = Math.round(windSpeed.reduce((current, next) => current + next) / windSpeed.length);

        return {
            avgHumidity,
            maxTemperature,
            avgWindSpeed
        }
    }

    setColorCardAndIcon = (data) => {
        const classNameArray = [];
        switch(data[0].weather[0].main) {
        case "Rain":
            classNameArray.push("rain");
            classNameArray.push("wi-day-rain");
            break;
        case "Clear":
            classNameArray.push("sunny");
            classNameArray.push("wi-day-sunny");
            break;
        case "Clouds":
            classNameArray.push("cloudy");
            classNameArray.push("wi-day-cloudy");
            break;
        case "Thunderstorm":
            classNameArray.push("lightning");
            classNameArray.push("wi-day-thunderstorm");
            break;
        case "Extreme":
            classNameArray.push("lightning");
            classNameArray.push("wi-day-lightning");
            break;
        case "Snow":
            classNameArray.push("cloudy");
            classNameArray.push("wi-day-snow");
            break;
        case "Drizzle":
            classNameArray.push("rain");
            classNameArray.push("wi-day-showers");
            break;
        default:
            classNameArray.push("default");
        }
        return classNameArray
    }

    render() {
        const weatherGroupByDate = Object.values(this.groupByDays(this.props.weatherData.list)).slice(0,4);

        const weatherList = weatherGroupByDate.map((weather, index) => {
                return (
                    <WeatherItem
                        setColorCardAndIcon={this.setColorCardAndIcon}
                        getWeatherInfo={this.getWeatherInfo}
                        getDay={this.getDayName}
                        weather={weather}
                        showDetailsHandler={this.showWeatherDetailsHandler}
                        showDetails={this.state.showWeatherDetails[index]}
                        hideDetailsHandler={this.hideWeatherDetailsHandler}
                        cityName={this.props.weatherData.city.name}
                        index={index}
                        key={index} />
                );

            });

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {weatherList}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherResult
