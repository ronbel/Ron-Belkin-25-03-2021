import Axios from 'axios';


export function useWeatherApi(){

    const requestSender = Axios.create({
        baseURL: 'http://dataservice.accuweather.com',
        params: {
            apiKey: process.env.REACT_APP_WEATHER_API_KEY
        }
    });


    return {
        getLocationForAutocomplete: async query => (await requestSender.get('/locations/v1/cities/autocomplete', {params: {q: query}})).data,
        getConditionsForLocation: async locationKey => (await requestSender.get(`/currentconditions/v1/${locationKey}`)).data,
        getForecastForLocation: async locationKey => (await requestSender.get(`/forecasts/v1/daily/5day/${locationKey}`)).data,
        getLocationData: async (lat,long) => (await requestSender.get('/locations/v1/cities/geoposition/search'), {params: {q: `${lat},${long}`}}).data
    }




}