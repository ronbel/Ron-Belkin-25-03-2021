import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { FavoritesActions, ForecastActions } from '../../store';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import DefaultSpinner from '../default-spinner/default-spinner';
import styles from './favorites-card.module.scss';
import {useWeatherApi} from '../../hooks/weather.api.hook';
import { useHistory } from "react-router-dom";
import {useTempUnit} from '../../hooks/temp.unit.hook';

export default function FavoritesCard({ item }) {
    const [hasError, setHasError] = useState(false);
    const { locationKey, locationName, weatherData } = item;
    const {addToast} = useToasts();
    const dispatch = useDispatch();
    const api = useWeatherApi();
    const history = useHistory();
    const {getTemperatureText} = useTempUnit();

    useEffect(() => {
        const init = async () => {
            if (!!weatherData) {
                return;
            }

            try {
                await dispatch(FavoritesActions.setWeatherData(locationKey));
            } catch (e) {
                setHasError(true);
                addToast(`An error occured while trying to get info for ${locationName}`);
            }
        }
        init();
    }, [weatherData, dispatch, addToast, locationKey, locationName]);

    const navigateToForecast = () => {
        dispatch(ForecastActions.updateForecastData({locationKey,locationName}));
        history.push('/');
    }

    return (
        <Card onClick={navigateToForecast} className={styles.card}>
            <CardContent className={styles.content}>
                <h2>{locationName}</h2>
                {hasError && <span>An error has occured</span>}

                {!hasError && !weatherData && <DefaultSpinner style={{margin: 'auto'}}/>}

                {!!weatherData && 
                <>
                    <img alt={weatherData.WeatherText} src={api.getIconUrl(weatherData.WeatherIcon)}/>
                    <span>{getTemperatureText(weatherData.Temperature.Metric.Value)}</span>
                </>
                }
            </CardContent>
            <CardActions className={styles.actions}>
                <Button onClick={navigateToForecast}>View Daily Forecast</Button>
            </CardActions>
        </Card>
    )



}