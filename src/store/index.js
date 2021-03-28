import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {useSelector} from 'react-redux';

import {FavoritesReducer} from './favorites/reducer';
import {ForecastReducer} from './forecast-display/reducer';
import {SettingsReducer} from './settings/reducer';

const rootReducer = combineReducers({
    favorites: FavoritesReducer,
    forecast: ForecastReducer,
    settings: SettingsReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middleware);

export const useForecast = () => useSelector(state => state.forecast);
export const useFavorites = () => useSelector(state => state.favorites);
export const useSettings = () => useSelector(state => state.settings);


export {ACTION_CREATORS as ForecastActions} from './forecast-display/actions';
export {ACTION_CREATORS as FavoritesActions} from './favorites/actions';
export {ACTION_CREATORS as SettingsActions} from './settings/actions';

export {TEMP_UNITS} from './settings/reducer';