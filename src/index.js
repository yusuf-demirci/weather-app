import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { WeatherProvider } from './context/WeatherContext';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <WeatherProvider>
            <App />
        </WeatherProvider>
    </React.StrictMode>,
    document.getElementById("root")
);


