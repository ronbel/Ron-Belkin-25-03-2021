import Axios from 'axios';


const autocomplete_results = [
    {
        "Version": 1,
        "Key": "623",
        "Type": "City",
        "Rank": 20,
        "LocalizedName": "Paris",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "133785",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 10e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "133786",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 11e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "133787",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 12e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "133788",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 13e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "133789",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 14e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "133790",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 15e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "2258521",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 16e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "133791",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Paris 17e Arrondissement",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "75",
            "LocalizedName": "Ville de Paris"
        }
    },
    {
        "Version": 1,
        "Key": "206162",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Pariaman",
        "Country": {
            "ID": "ID",
            "LocalizedName": "Indonesia"
        },
        "AdministrativeArea": {
            "ID": "SB",
            "LocalizedName": "West Sumatra"
        }
    }
];

const tel_aviv_forecast = {
    "Headline": {
        "EffectiveDate": "2021-03-31T20:00:00+03:00",
        "EffectiveEpochDate": 1617210000,
        "Severity": 5,
        "Text": "Expect showers Wednesday night",
        "Category": "rain",
        "EndDate": "2021-04-01T08:00:00+03:00",
        "EndEpochDate": 1617253200,
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2021-03-27T07:00:00+03:00",
            "EpochDate": 1616817600,
            "Temperature": {
                "Minimum": {
                    "Value": 12.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 17.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2021-03-28T07:00:00+03:00",
            "EpochDate": 1616904000,
            "Temperature": {
                "Minimum": {
                    "Value": 12.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 18.6,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2021-03-29T07:00:00+03:00",
            "EpochDate": 1616990400,
            "Temperature": {
                "Minimum": {
                    "Value": 13.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 19.2,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2021-03-30T07:00:00+03:00",
            "EpochDate": 1617076800,
            "Temperature": {
                "Minimum": {
                    "Value": 14.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 20.0,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2021-03-31T07:00:00+03:00",
            "EpochDate": 1617163200,
            "Temperature": {
                "Minimum": {
                    "Value": 14.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 19.8,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 39,
                "IconPhrase": "Partly cloudy w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
        }
    ]
};



export function useWeatherApi(){

    const requestSender = Axios.create({
        baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
        params: {
            apikey: process.env.REACT_APP_WEATHER_API_KEY
        }
    });


    return {
        getLocationForAutocomplete: async query => autocomplete_results, //(await requestSender.get('/locations/v1/cities/autocomplete', {params: {q: query}, mode: 'no-cors'})).data,
        getConditionsForLocation: async locationKey => (await requestSender.get(`/currentconditions/v1/${locationKey}`)).data,
        getForecastForLocation: async locationKey => tel_aviv_forecast, //(await requestSender.get(`/forecasts/v1/daily/5day/${locationKey}`, {params: {metric: true}})).data,
        getLocationData: async (lat,long) => (await requestSender.get('/locations/v1/cities/geoposition/search'), {params: {q: `${lat},${long}`}}).data
    }




}