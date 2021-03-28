
import {SET_INITIAL_VIEW, CLEAR_VIEW, START_DATA_FETCH, UPDATE_VIEW, SET_ERROR} from './actions';
const INITIAL_STATE = {locationName: '', locationKey: '', forecastData: {}, isFetching: false, viewEmpty: true, hasError: false};


export function ForecastReducer(state = INITIAL_STATE, action){

    const {type, payload} = action;
    switch(type){
        case CLEAR_VIEW: return {...state,...INITIAL_STATE};
        case START_DATA_FETCH: return {...state, isFetching: true}
        case SET_INITIAL_VIEW: return {...state,...payload, viewEmpty: false}
        case UPDATE_VIEW: return {...state,...payload, isFetching: false, hasError: false, viewEmpty: false};
        case SET_ERROR: return {...state, hasError: true};
        default: return state
    }
}