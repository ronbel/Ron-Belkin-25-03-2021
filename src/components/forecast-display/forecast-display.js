import React, { useState, useEffect } from 'react';
import { Paper, Tooltip, Card, CardActions, CardContent, Button } from '@material-ui/core';
import styles from './forecast-display.module.scss';
import { Favorite, FavoriteBorder, CancelPresentation } from '@material-ui/icons';
import { useWeatherApi } from '../../hooks/weather.api.hook';
import Loader from 'react-loader-spinner';
import FadeIn from 'react-fade-in';

export default function ForecastDisplay() {

    const [dayData, setDayData] = useState(null);
    const api = useWeatherApi();

    useEffect(() => {
        const init = async () => {
            setDayData(await api.getForecastForLocation('a'))
        }
        init();
    }, [])

    const getDayName = dateString => (new Date(dateString)).toLocaleString('en-us', { weekday: 'short' })
    const isEvening = (new Date()).getHours > 15;


    if (!dayData) {
        return (<Paper className={styles.container} elevation={5}>
            <Loader
                type="Puff"
                color="#00BFFF"
                width={100}
                height={100} />
        </Paper>)
    }

    return (
        <Paper className={styles.container} elevation={5}>
            <h1>Location Name</h1>
            <h3>{dayData.Headline.Text}</h3>

            <Tooltip className={styles.favorites} title="Add To Favorites">
                <div>
                    <Favorite fontSize="large" color="secondary" />
                </div>
            </Tooltip>

            <Tooltip className={styles.clear} title="Clear Data">
                <div>
                    <CancelPresentation fontSize="large" />
                </div>
            </Tooltip>



            <FadeIn delay={150} transitionDuration={500} className={styles['cards-container']}>
                {
                    dayData.DailyForecasts.map(item => (
                        <Card className={styles['day-card']} variant="outlined" key={item.Date} >
                            <CardContent className={styles['day-card-content']}>
                                <h4>{getDayName(item.Date)}</h4>
                                <span>{item.Temperature.Minimum.Value} °C</span>
                                <span>{item[isEvening ? 'Night' : 'Day'].IconPhrase}</span>
                            </CardContent>
                            <CardActions>
                                <Button href={item.Link}>View Full Forecast</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </FadeIn>




        </Paper>
    )
}