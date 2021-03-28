import React, { useState, useCallback } from 'react';
import { useWeatherApi } from '../../hooks/weather.api.hook';
import { debounce } from "debounce";
import AsyncSelect from 'react-select/async';
import { useToasts } from 'react-toast-notifications';
import { useDispatch } from 'react-redux';
import { ForecastActions } from '../../store';

export default function AutosuggestInput() {
    const [value, setValue] = useState('');
    const { addToast } = useToasts();
    const api = useWeatherApi();
    const dispatch = useDispatch();

    const getResults = useCallback(debounce((inputValue, resolveOptions) => {
        if (inputValue.trim() === '') {
            return;
        }

        api.getLocationForAutocomplete(inputValue)
            .then(results => resolveOptions(results?.map(r => ({ value: r.Key, label: `${r.LocalizedName} - ${r?.Country?.LocalizedName}` }))))
            .catch(e => {
                addToast('An error has occured while fetching locations', { appearance: 'error' });
                console.error(e);
            });

    }, 500), []);

    const onOptionSelected = async ({ value: locationKey, label: locationName }) => {
        try {
            await dispatch(ForecastActions.updateForecastData({ locationKey, locationName }));
        } catch (e) {
            addToast('An error has occured, please try a different location', { appearance: 'error' }) 
        }
    }


    return (
        <div style={{ width: '100%', marginBottom: 50 }}>
            <AsyncSelect
                placeholder="Enter location name..."
                onChange={onOptionSelected}
                cacheOptions
                onInputChange={setValue}
                value={value}
                loadOptions={getResults} />
        </div>
    )

}