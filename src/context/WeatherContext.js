import { createContext, useState, useEffect } from "react";
import Sunny from "../img/sunny.jpg";
import Rainy from "../img/rainy.jpeg";
import Cloudy from "../img/cloudy.jpeg";
import Snowy from "../img/snowy.jpeg";

const WeatherContext = createContext();

const WEATHER_APP_URL = process.env.REACT_APP_WEATHER;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = ({ children }) => {
    const [userCity, setUserCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState({});
    const [weeklyInfo, setWeeklyInfo] = useState([]);
    const [bgroundStyle, setBgroundStyle] = useState(Sunny);
    const [bgStyleWeekly, setBgStyleWeekly] = useState(Array(6).fill(Sunny));
    const [alertMessage, setAlertMessage] = useState("");
    const [loaded, setLoaded] = useState(false)
    

    // get today's weather info from API
    const getWeatherInfo = async () => {
        if (userCity === "") {
            setAlertMessage("Please enter a city name!");
            setTimeout(() => {
                setAlertMessage("");
            }, 3000);
        } else {
            try {
                const response = await fetch(
                    `${WEATHER_APP_URL}/data/2.5/find?q=${userCity}&units=metric&appid=${WEATHER_API_KEY}`
                );
                const data = await response.json();

                createWeatherCard(data.list[0]);
            } catch (err) {
                setAlertMessage(`${userCity} city not found!`);
                setTimeout(() => {
                    setAlertMessage("");
                }, 3000);
            }
            setUserCity("");
            setLoaded(true)
        }
    };

    // create today's weather card
    const createWeatherCard = (data) => {
        const {
            coord: { lat, lon },
            main: { feels_like: feelsLike, humidity, temp, temp_max, temp_min },
            name,
            sys: { country },
            weather: [{ description }],
            wind: { speed },
        } = data;

        setWeatherInfo({
            name,
            lat,
            lon,
            feelsLike,
            humidity,
            temp,
            temp_max,
            temp_min,
            country,
            description,
            speed,
        });
        changeBackground(description);
        getWeeklyInfo(lat, lon);
    };

    // get this week's weather info from API
    const getWeeklyInfo = async (lat, lon) => {
        const response = await fetch(
            `${WEATHER_APP_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${WEATHER_API_KEY}`
        );
        let data = await response.json();
        data = data.daily.slice(1, 7);

        createWeeklyCards(data);
    };

    // create weekly weather cards
    const createWeeklyCards = (data) => {
        setWeeklyInfo(
            data.map((element) => {
                const {
                    weather: [{ description }],
                    temp: { day: temp },
                } = element;

                return [
                    {
                        description,
                        temp,
                    },
                ];
            })
        );

        setBgStyleWeekly(
            data.map((element, index) => {
                const {
                    weather: [{ description }],
                } = element;
                switch (true) {
                    case description.includes("rain"):
                        return Rainy;
                    case description.includes("clear"):
                        return Sunny;
                    case description.includes("snow"):
                        return Snowy;
                    default:
                        return Cloudy;
                }
            })
        );
    };

    // change background according to weather
    const changeBackground = (description) => {
        switch (true) {
            case description.includes("rain"):
                setBgroundStyle(Rainy);
                break;
            case description.includes("clear"):
                setBgroundStyle(Sunny);
                break;
            case description.includes("snow"):
                setBgroundStyle(Snowy);
                break;
            default:
                setBgroundStyle(Cloudy);
        }
    };

    // user input listener
    const handleCityChange = (e) => {
        setUserCity(e.target.value);
    };

    return (
        <WeatherContext.Provider
            value={{
                userCity,
                weatherInfo,
                weeklyInfo,
                bgroundStyle,
                bgStyleWeekly,
                alertMessage,
                loaded,
                setUserCity,
                handleCityChange,
                getWeatherInfo,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;
