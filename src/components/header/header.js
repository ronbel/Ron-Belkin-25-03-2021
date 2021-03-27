import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';


export default function Header() {


    return (
        <header className={styles.header}>
            <h1>Weather App</h1>
            <nav className={styles['links-container']}>
                <NavLink exact className={styles.link} activeClassName={styles.active} to="/">Home</NavLink>
                <NavLink exact className={styles.link} activeClassName={styles.active} to="/favorites">Favorites</NavLink>
            </nav>
        </header>
    )
}