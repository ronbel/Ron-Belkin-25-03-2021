import React, { useState, useCallback } from 'react';
import { useWeatherApi } from '../../hooks/weather.api.hook';
import { debounce } from "debounce";
import AsyncSelect from 'react-select/async';
import { useToasts } from 'react-toast-notifications';

export default function AutosuggestInput() {
    const [value, setValue] = useState('');
    const { addToast } = useToasts();
    const api = useWeatherApi();

    const getResults = useCallback(debounce((inputValue, resolveOptions) => {
        if (inputValue.trim() === '') {
            return;
        }

        api.getLocationForAutocomplete(value)
            .then(results => resolveOptions(results.map(r => ({ value: r.Key, label: `${r.LocalizedName} - ${r?.Country?.LocalizedName}` }))))
            .catch(e => {
                addToast('An error has occured while fetching locations', { appearance: 'error' });
                console.error(e);
            });

    }, 500), []);

    const onOptionSelected = ({ value: locationKey }) => {
        console.log(locationKey)
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