import { WeatherApi } from '../../hooks/weather.api.hook';
export const SET_INITIAL_VIEW = 'SET_INITIAL_VIEW';
export const UPDATE_VIEW = 'UPDATE_VIEW';
export const CLEAR_VIEW = 'CLEAR_VIEW';
export const START_DATA_FETCH = 'START_DATA_FETCH';
export const SET_ERROR = 'SET_ERROR';


const DEFAULT_LOCATION_NAME = 'Tel Aviv - Israel';
const DEFAULT_LOCATION_KEY = 215854;
const api = new WeatherApi();


function setIntialView(geoData) {
    return async function (dispatch) {
        try {
            let locationKey = DEFAULT_LOCATION_KEY, locationName = DEFAULT_LOCATION_NAME;
            if (!geoData.error) {
                const { long, lat } = geoData;
                const locationData = await api.getLocationDataByCoords(lat, long);
                locationKey = locationData.Key;
                locationName = `${locationData.LocalizedName} - ${locationData.Country.LocalizedName}`;
            }

            const forecastData = await api.getForecastForLocation(locationKey);
            dispatch({ type: SET_INITIAL_VIEW, payload: { locationKey, locationName, forecastData } });
        } catch (e) {
            dispatch({type: SET_ERROR});
            throw e;
        }
    }
}

function clearForecastData() {
    return { type: CLEAR_VIEW }
}


function updateForecastData({ locationKey, locationName }) {
    return async function (dispatch) {
        dispatch({ type: START_DATA_FETCH });
        try {
            const forecastData = await api.getForecastForLocation(locationKey);
            dispatch({ type: UPDATE_VIEW, payload: { locationKey, locationName, forecastData } });
        } catch (e) {
            dispatch({type: SET_ERROR});
            throw e;
        }
    }
}


export const ACTION_CREATORS = { setIntialView, clearForecastData, updateForecastData };