import {
    faCloudShowersHeavy,
    faCloud,
    faSun,
    faSnowflake,
    faCloudSun,
    faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherIcon(props) {
    const condition = props.condition;
    let weatherIcon;

    switch (condition) {
        case "clear sky":
            weatherIcon = faSun;
            break;
        case "few clouds":
            weatherIcon = faCloudSun;
            break;
        case "scattered clouds":
        case "broken clouds":
            weatherIcon = faCloud;
            break;
        case "rain":
        case "light rain":
        case "moderate rain":
            weatherIcon = faCloudSunRain;
            break;
        case "shower rain":
        case "thunderstorm":
        case "rain and snow":
        case "heavy intensity rain":
            weatherIcon = faCloudShowersHeavy;
            break;
        case "snow":
        case "light snow":
            weatherIcon = faSnowflake;
            break;
        default:
            weatherIcon = faCloud;
    }

    return <FontAwesomeIcon className="weather-icon" icon={weatherIcon} />;
}

export default WeatherIcon;
