import {TOGGLE_FAVORITE} from './actions';


const INITIAL_STATE = {favorites: JSON.parse(localStorage.getItem('favorites')) ?? [] }


export function FavoritesReducer(state = INITIAL_STATE, action){

    const {type, payload} = action;
    let updatedFavorites = [];
    switch(type){
        case TOGGLE_FAVORITE: {
            const {locationKey, locationName} = payload;
            const {favorites} = state;
            const itemAlreadySaved = favorites.some(x => x.locationKey === locationKey);

            if(itemAlreadySaved){
                updatedFavorites = favorites.filter(x => x.locationKey !== locationKey);
            } else {
                updatedFavorites = [...favorites, {locationKey, locationName, weatherData: null, validUntil: null}]
            }
            break;
        }
        default: {
            return state;
        }
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    return {...state, favorites: updatedFavorites};
}