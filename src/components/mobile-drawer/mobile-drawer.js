import React, { useState } from 'react';
import { Drawer, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import styles from './mobile-drawer.module.scss';
import { NavLink as Link } from 'react-router-dom';
import TempUnitButton from '../temp-unit-button/temp-unit-button';

export default function MobileDrawer() {

    const [isOpen, setIsOpen] = useState(false);

    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);

    return (
        <>
            <Button onClick={openDrawer}>
                <Menu fontSize="large" style={{ color: 'white' }} />
            </Button>

            <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
                <div className={styles['drawer-content']}>
                    <Link onClick={closeDrawer} exact activeClassName={styles.active} className={styles.link} to="/">Home</Link>
                    <Link onClick={closeDrawer} exact activeClassName={styles.active} className={styles.link} to="/favorites">Favorites</Link>
                    <TempUnitButton/>
                </div>
            </Drawer>
        </>)


}