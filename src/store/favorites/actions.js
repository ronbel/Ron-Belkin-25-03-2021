import { WeatherApi } from '../../hooks/weather.api.hook';
const api = new WeatherApi();


export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FAVORITE_WEATHER_DATA = 'SET_FAVORITE_WEATHER_DATA';

function toggleFavorite({locationKey, locationName}){
    return {type: TOGGLE_FAVORITE, payload: {locationKey,locationName}};
}

function setWeatherData(locationKey){
    return async function(dispatch){
        const weatherData = await api.getConditionsForLocation(locationKey);
        dispatch({type: SET_FAVORITE_WEATHER_DATA, payload: {locationKey,weatherData}})
    }
}



export const ACTION_CREATORS = {toggleFavorite, setWeatherData};

