export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const UPDATE_FAVORITE_WEATHER_DATA = 'UPDATE_FAVORITE_WEATHER_DATA';

function toggleFavorite({locationKey, locationName}){
    return {type: TOGGLE_FAVORITE, payload: {locationKey,locationName}};
}


export const ACTION_CREATORS = {toggleFavorite};

