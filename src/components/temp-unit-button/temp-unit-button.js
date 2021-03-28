import React from 'react';
import {useDispatch} from 'react-redux';
import {useSettings, SettingsActions} from '../../store';
import styles from './temp-unit-button.module.scss';


export default function TempUnitButton(){

    const dispatch = useDispatch();
    const {selectedTempUnit} = useSettings();

    const toggleUnit = () => dispatch(SettingsActions.toggleTempratureUnit());

    return <div className={styles.button} onClick={toggleUnit}><span>°{selectedTempUnit[0]}</span></div>


}