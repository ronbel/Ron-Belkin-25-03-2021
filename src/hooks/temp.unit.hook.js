import { useSettings, TEMP_UNITS } from '../store';


export function useTempUnit() {

    const { selectedTempUnit } = useSettings();

    const convertToFarenheit = (celsius) => (celsius * 9/5 + 32).toFixed(1);

    const getTemperatureText = celsius => {
        if(selectedTempUnit === TEMP_UNITS.CELCIUS){
            return `${celsius} °C`
        }
        return `${convertToFarenheit(celsius)} °F`
    }

    return {convertToFarenheit,getTemperatureText};

}