import React from 'react';
import {Container} from '@material-ui/core';

import AutosuggestInput from '../components/autosuggest-input/autosuggest-input';
import ForecastDisplay from '../components/forecast-display/forecast-display';

export default function MainScreen(){

    return(
        <Container style={{padding: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <AutosuggestInput/>
            <ForecastDisplay/>
        </Container>
    )
}