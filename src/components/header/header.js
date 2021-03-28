import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import MobileDrawer from '../mobile-drawer/mobile-drawer';

export default function Header() {


    return (
        <header className={styles.header}>
            <h1>Weather App</h1>
            <BrowserView viewClassName={styles['links-container']}>
                <NavLink exact className={styles.link} activeClassName={styles.active} to="/">Home</NavLink>
                <NavLink exact className={styles.link} activeClassName={styles.active} to="/favorites">Favorites</NavLink>
            </BrowserView>
            <MobileView>
                <MobileDrawer/>
            </MobileView>
        </header>
    )
}