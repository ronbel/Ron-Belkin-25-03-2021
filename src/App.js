import styles from './App.module.scss';
import AppRouter from './router/router';
import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useToasts } from 'react-toast-notifications';
import {useDispatch} from 'react-redux';
import {ForecastActions} from './store';



function App() {


  const [appReady, setAppReady] = useState(false);
  const {addToast} = useToasts();
  const dispatch = useDispatch();

  const getLocationAsync = () => {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition((location) => resolve({ lat: location.coords.latitude, long: location.coords.longitude }), error => resolve({error}), { timeout: 6000 })
    })
  }

  useEffect(() => {
    const appStartup = async () => {
      try {
        const geoData = await getLocationAsync();

        if(geoData.error){
          let message = 'We were unable to get your location';
          if(geoData?.error?.code === 1){
            message = 'Location permissions were denied. To get the weather forecast of your location, allow location permissions.'
          }
          addToast(message, {appearance: 'warning'})
        }

        await dispatch(ForecastActions.setIntialView(geoData));
      } catch (e) {
        addToast('An error has occured while initializing the app', { appearance: 'error' }) 
      } finally {
        setAppReady(true);
      }
    }
    appStartup();
  }, [addToast,dispatch])

  if (!appReady) {
    return <Loader
      type="Puff"
      color="#00BFFF"
      width={100}
      height={100}
      className={styles['loading-spinner']}
    />

  }

  return (
    <AppRouter />
  );
}

export default App;
