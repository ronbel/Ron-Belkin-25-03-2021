import React from 'react';
import { Container } from '@material-ui/core';
import {useFavorites} from '../store';
import FavoritesCard from '../components/favorites-card/favorites-card';
import FadeIn from 'react-fade-in';
import styles from './favorites.screen.module.scss';

export default function FavoritesScreen() {

    const {favorites} = useFavorites();

    return (
        <Container style={{padding: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>My Favorites</h1>
            {favorites.length === 0 && <h2>You haven't added any favorite locations yet</h2>}
            <FadeIn delay={150} transitionDuration={500} className={styles['favorites-container']}>
                {
                    favorites.map(item => <FavoritesCard item={item} key={item.locationKey}/>)
                }
            </FadeIn>
        </Container>
    )
}