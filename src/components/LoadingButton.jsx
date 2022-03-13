import React from "react";
import { Spinner } from "react-bootstrap";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function Button({ isLoading, children, ...props }) {
    const { getWeatherInfo } = useContext(WeatherContext);

    return (
        <button
            
            className="btn btn-warning py-2 mt-3"
            {...props}
            style={{ width: "6rem", height: "3.6rem" }}
        >
            {isLoading ? (
                <Spinner animation="border" variant="dark" />
            ) : (
                children
            )}
        </button>
    );
}

function LoadingButton() {
    const [isButtonLoading, setIsButtonLoading] = React.useState(false);
    const { getWeatherInfo } = useContext(WeatherContext);

    return (
        <Button
            onClick={() => {
                getWeatherInfo();
                setIsButtonLoading(true);
                setTimeout(() => {
                    setIsButtonLoading(false);
                }, 500);
            }}
            isLoading={isButtonLoading}
        >
            Click me
        </Button>
    );
}

export default LoadingButton;
