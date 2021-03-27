import Axios from 'axios';
import {useMemo} from 'react';

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

const tel_aviv_current_condition = [
    {
        "LocalObservationDateTime": "2021-03-27T21:05:00+03:00",
        "EpochTime": 1616868300,
        "WeatherText": "Mostly clear",
        "WeatherIcon": 34,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 15.0,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 59.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }
]


const geolocation_result = {
    "Version": 1,
    "Key": "215838",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Holon",
    "EnglishName": "Holon",
    "PrimaryPostalCode": "",
    "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
    },
    "Country": {
        "ID": "IL",
        "LocalizedName": "Israel",
        "EnglishName": "Israel"
    },
    "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv",
        "EnglishName": "Tel Aviv",
        "Level": 1,
        "LocalizedType": "District",
        "EnglishType": "District",
        "CountryID": "IL"
    },
    "TimeZone": {
        "Code": "IDT",
        "Name": "Asia/Jerusalem",
        "GmtOffset": 3.0,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-30T23:00:00Z"
    },
    "GeoPosition": {
        "Latitude": 32.003,
        "Longitude": 34.756,
        "Elevation": {
            "Metric": {
                "Value": 23.0,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 75.0,
                "Unit": "ft",
                "UnitType": 0
            }
        }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence"
    ]
}



export class WeatherApi{

    constructor(){
        this.requestSender = Axios.create({
            baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
            params: {
                apikey: process.env.REACT_APP_WEATHER_API_KEY
            }
        });
    }

    getLocationForAutocomplete = async query => autocomplete_results; //(await this.requestSender.get('/locations/v1/cities/autocomplete', {params: {q: query}})).data
    getConditionsForLocation = async locationKey => tel_aviv_current_condition; //(await this.requestSender.get(`/currentconditions/v1/${locationKey}`)).data[0],
    getForecastForLocation = async locationKey => tel_aviv_forecast; //(await this.requestSender.get(`/forecasts/v1/daily/5day/${locationKey}`, {params: {metric: true}})).data,
    getLocationDataByCoords = async (lat,long) => geolocation_result //(await this.requestSender.get('/locations/v1/cities/geoposition/search'), {params: {q: `${lat},${long}`}}).data
}


export function useWeatherApi(){
    return useMemo(() => new WeatherApi(), []);
}