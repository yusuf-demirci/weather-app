import { Form, FloatingLabel } from "react-bootstrap/";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function UserInput() {
    const { userCity, handleCityChange } = useContext(WeatherContext);

    return (
        <FloatingLabel
            controlId="floatingInput"
            label="Enter a city"
            className="m-3 me-0 w-50"
        >
            <Form.Control
                onChange={handleCityChange}
                className="border-none"
                type="text"
                placeholder="text"
                value={userCity}
            />
        </FloatingLabel>
    );
}

export default UserInput;
