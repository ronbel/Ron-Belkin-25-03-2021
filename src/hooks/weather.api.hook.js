import Axios from 'axios';
import {useMemo} from 'react';


export class WeatherApi{

    constructor(){
        this.requestSender = Axios.create({
            baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
            params: {
                apikey: process.env.REACT_APP_WEATHER_API_KEY
            }
        });
    }
    getIconUrl = iconNumber => `https://developer.accuweather.com/sites/default/files/${iconNumber.toString().padStart(2, '0')}-s.png`
    getLocationForAutocomplete = async query => (await this.requestSender.get('/locations/v1/cities/autocomplete', {params: {q: query}})).data;
    getConditionsForLocation = async locationKey => (await this.requestSender.get(`/currentconditions/v1/${locationKey}`)).data[0];
    getForecastForLocation = async locationKey => (await this.requestSender.get(`/forecasts/v1/daily/5day/${locationKey}`, {params: {metric: true}})).data;
    getLocationDataByCoords = async (lat,long) => (await this.requestSender.get('/locations/v1/cities/geoposition/search', {params: {q: `${lat},${long}`}})).data;
}


export function useWeatherApi(){
    return useMemo(() => new WeatherApi(), []);
}