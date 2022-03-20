import WeatherContext from "../context/WeatherContext";
import WeatherIcon from "./WeatherIcon";
import { useContext } from "react";
import { Card } from "react-bootstrap";

function WeatherCardWeekly({ id }) {
    const { weeklyInfo, bgStyleWeekly } = useContext(WeatherContext);

    const currentDate = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * id
    );

    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    return (
        <Card
            className="mx-auto px-1 text-start border-5 shadow-lg mb-3"
            style={{
                width: "12.3rem",
                backgroundImage: `url(${bgStyleWeekly[id - 1]})`
            }}
        >
            <Card.Body>
                <Card.Text className="fs-6">
                    {currentDate.toLocaleDateString("en-us", options)}
                </Card.Text>
                <WeatherIcon
                    condition={
                        weeklyInfo && weeklyInfo.length
                            ? weeklyInfo[id - 1][0].description
                            : "description"
                    }
                />
                <Card.Text className="degree fs-2 ">
                    {weeklyInfo && weeklyInfo.length
                        ? Math.round(weeklyInfo[id - 1][0].temp)
                        : "temp"}
                    °C
                </Card.Text>
                <Card.Text className="fs-5 mt-2">
                    {weeklyInfo && weeklyInfo.length
                        ? weeklyInfo[id - 1][0].description
                        : "description"}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WeatherCardWeekly;
