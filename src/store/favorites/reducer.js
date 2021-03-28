import {TOGGLE_FAVORITE, SET_FAVORITE_WEATHER_DATA} from './actions';


const INITIAL_STATE = {favorites: JSON.parse(localStorage.getItem('favorites')) ?? [] }


export function FavoritesReducer(state = INITIAL_STATE, action){

    const {type, payload} = action;
    const {favorites} = state;
    let updatedFavorites = [];
    switch(type){
        case TOGGLE_FAVORITE: {
            const {locationKey, locationName} = payload;
            
            const itemAlreadySaved = favorites.some(x => x.locationKey === locationKey);

            if(itemAlreadySaved){
                updatedFavorites = favorites.filter(x => x.locationKey !== locationKey);
            } else {
                updatedFavorites = [...favorites, {locationKey, locationName, weatherData: null}]
            }
            break;
        }
        case SET_FAVORITE_WEATHER_DATA: {
            const {locationKey, weatherData} = payload;
            const favoriteItem = favorites.find(f => f.locationKey === locationKey);
            favoriteItem.weatherData = weatherData;
            updatedFavorites = [...favorites];
            break;
        }
        default: {
            return state;
        }
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites.map(f => ({locationKey: f.locationKey, locationName: f.locationName}))));
    return {...state, favorites: updatedFavorites};
}