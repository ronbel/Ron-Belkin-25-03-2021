import styles from './App.module.scss';
import AppRouter from './router/router';
import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useToasts } from 'react-toast-notifications';




function App() {


  const [appReady, setAppReady] = useState(false);
  const {addToast} = useToasts();

  const getLocationAsync = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((location) => resolve({ lat: location.coords.latitude, long: location.coords.longitude }), error => reject(error), { timeout: 6000 })
    })
  }

  useEffect(() => {
    const appStartup = async () => {
      try {
        const geoData = await getLocationAsync();
      } catch (e) {
        let message = 'We were unable to get your location';
        if(e.code === 1){
          message = 'Location permissions were denied. To get the weather forecast of your location, allow location permissions.'
        }
        addToast(message, {appearance: 'warning'})
      } finally {
        setAppReady(true);
      }
    }
    appStartup();
  }, [])

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
