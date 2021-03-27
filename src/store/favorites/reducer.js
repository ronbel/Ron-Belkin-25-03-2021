import {REMOVE_FROM_FAVORITES, ADD_TO_FAVORITES} from './actions';
const INITIAL_STATE = {favorites: JSON.parse(localStorage.getItem('favorites')) ?? [] }


export function FavoritesReducer(state = INITIAL_STATE, action){

    const {type, payload} = action;
    switch(type){
        case REMOVE_FROM_FAVORITES: {
            return state;
        }
        case ADD_TO_FAVORITES: {
            return state;
        }
        default: {
            return state;
        }
    }

}