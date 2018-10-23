import * as actionTypes from '../actions/actionTypes';

const initState = {
    weather: null,
    error: false
}

const weatherReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.SET_WEATHER_DATA:
            return {
                ...state,
                weather: action.weather,
                error: false
            }
        case actionTypes.FEATCH_WEATHER_DATA_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default weatherReducer