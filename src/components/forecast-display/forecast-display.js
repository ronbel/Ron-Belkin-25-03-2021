import React, {useMemo} from 'react';
import { Paper, Tooltip, Card, CardActions, CardContent, Button } from '@material-ui/core';
import styles from './forecast-display.module.scss';
import { Favorite, FavoriteBorder, CancelPresentation } from '@material-ui/icons';
import Loader from 'react-loader-spinner';
import FadeIn from 'react-fade-in';
import {useForecast, ForecastActions, useFavorites, FavoritesActions} from '../../store';
import {useDispatch} from 'react-redux';
import {useToasts} from 'react-toast-notifications';

export default function ForecastDisplay() {

    const {forecastData, locationName, locationKey, isFetching, viewEmpty, hasError} = useForecast();
    const {favorites} = useFavorites();

    const getDayName = dateString => (new Date(dateString)).toLocaleString('en-us', { weekday: 'short' })
    const timeOfDay = (new Date()).getHours > 15 ? 'Night' : 'Day';
    const getIconUrl = iconNumber => `https://developer.accuweather.com/sites/default/files/${iconNumber.toString().padStart(2,'0')}-s.png`
    const dispatch = useDispatch();
    const {addToast} = useToasts();

    const clearData = () => dispatch(ForecastActions.clearForecastData());
    

    const isSavedToFavorites = useMemo(() => favorites.some(x => x.locationKey === locationKey) , [favorites, locationKey]);

    const toggleFavorite = () => {
        dispatch(FavoritesActions.toggleFavorite({locationKey, locationName}));
        const message = `${locationName} ${isSavedToFavorites ? 'removed from' : 'added to' } favorites`;
        addToast(message, {appearance: 'success'});
    }
    

    if (!forecastData || isFetching) {
        return (<Paper className={styles.container} elevation={5}>
            <Loader
                type="Puff"
                color="#00BFFF"
                style={{margin: 'auto'}}
                width={100}
                height={100} />
        </Paper>)
    }

    if(viewEmpty || hasError){
        return <h1>{hasError ? 'An error has occured. Try searching for another location' : 'Select a location to see its weather forecast'}</h1>
    }

    return (
        <Paper className={styles.container} elevation={5}>
            <h1>{locationName}</h1>
            <h3>{forecastData.Headline.Text}</h3>

            <Tooltip className={styles.favorites} title={isSavedToFavorites ? 'Remove From Favorites' : 'Add To Favorites'}>
                <div onClick={toggleFavorite}>
                    {
                        isSavedToFavorites ?
                        <Favorite fontSize="large" color="secondary" /> :
                        <FavoriteBorder fontSize="large" color="secondary"/>
                    }
                </div>
            </Tooltip>

            <Tooltip className={styles.clear} title="Clear Forecast">
                <div onClick={clearData}>
                    <CancelPresentation fontSize="large" />
                </div>
            </Tooltip>



            <FadeIn delay={150} transitionDuration={500} className={styles['cards-container']}>
                {
                    forecastData.DailyForecasts.map(item => (
                        <Card className={styles['day-card']} variant="outlined" key={item.Date} >
                            <CardContent className={styles['day-card-content']}>
                                <h4>{getDayName(item.Date)}</h4>
                                <img alt={item[timeOfDay].IconPhrase} src={getIconUrl(item[timeOfDay].Icon)}/>
                                <span>{item.Temperature.Minimum.Value} °C</span>
                                <span>{item[timeOfDay].IconPhrase}</span>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button href={item.Link}>View Full Forecast</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </FadeIn>




        </Paper>
    )
}