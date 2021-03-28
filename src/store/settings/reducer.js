import {TOGGLE_TEMP_UNIT} from './actions';


export const TEMP_UNITS = {
    CELCIUS: 'Celcius',
    FARENHEIT: 'Farenheit'
}

const INITIAL_STATE = {selectedTempUnit: TEMP_UNITS.CELCIUS};


export function SettingsReducer(state = INITIAL_STATE, action){
    const {type, payload} = action;
    switch(type){
        case TOGGLE_TEMP_UNIT: {
            const {selectedTempUnit} = state;
            const newUnit = selectedTempUnit === TEMP_UNITS.CELCIUS ? TEMP_UNITS.FARENHEIT : TEMP_UNITS.CELCIUS;
            return {...state, selectedTempUnit: newUnit};
        }
        default: {
            return state;
        }
    }
}