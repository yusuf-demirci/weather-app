import InputBox from "./components/InputBox";
import WeatherCard from "./components/WeatherCard";
import WeatherCardWeekly from "./components/WeatherCardWeekly";
import WeatherContext from "./context/WeatherContext";
import Warning from "./components/Warning";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";

function App() {
    let { bgroundStyle, loaded } = useContext(WeatherContext);

    return (
        <div
            className={"main-bg text-center mx-auto p-0 pt-5"}
            style={{
                backgroundImage: `url(${bgroundStyle})`,
            }}
        >
            <h1>Weather App</h1>
            <InputBox />
            <Warning />
            {loaded && <WeatherCard />}
            <div className="mt-5 pt-5">
                
                    {loaded && (
                        <Row className="d-flex justify-content-center">
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <WeatherCardWeekly id="1" />
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <WeatherCardWeekly id="2" />
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <WeatherCardWeekly id="3" />
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <WeatherCardWeekly id="4" />
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <WeatherCardWeekly id="5" />
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <WeatherCardWeekly id="6" />
                            </Col>
                        </Row>
                    )}
                
            </div>
        </div>
    );
}

export default App;
