import { Card } from "react-bootstrap";
import WeatherContext from "../context/WeatherContext";
import { useContext } from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherCard() {
    const { weatherInfo, bgroundStyle } = useContext(WeatherContext);
    const currentDate = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    return (
        <Card
            className="mx-auto px-2 text-start border-5 shadow-lg"
            style={{ width: "17rem", backgroundImage: `url(${bgroundStyle})` }}
        >
            <Card.Body>
                <Card.Title className="fs-3">
                    {weatherInfo.name} / {weatherInfo.country}
                </Card.Title>
                <Card.Text className="fs-6 m-0">
                    {currentDate.toLocaleDateString("en-us", options)}
                </Card.Text>
                <WeatherIcon condition={weatherInfo.description} />
                <Card.Text className="degree fs-1 ">
                    {Math.round(+weatherInfo.temp)}°C
                </Card.Text>
                <Card.Text className="degree fs-3 ">
                    {weatherInfo.description}
                </Card.Text>
                <Card.Text className="mt-3">
                    Feels like: {Math.round(+weatherInfo.feelsLike)}°C
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WeatherCard;
