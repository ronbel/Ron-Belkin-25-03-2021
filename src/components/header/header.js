import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import MobileDrawer from '../mobile-drawer/mobile-drawer';

export default function Header() {


    return (
        <header className={styles.header}>
            <h1>Weather App</h1>
            <div className={styles['links-container']}>
                <NavLink exact className={styles.link} activeClassName={styles.active} to="/">Home</NavLink>
                <NavLink exact className={styles.link} activeClassName={styles.active} to="/favorites">Favorites</NavLink>
            </div>
            <div className={styles.menu}>
                <MobileDrawer/>
            </div>
        </header>
    )
}