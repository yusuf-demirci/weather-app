import WeatherContext from "../context/WeatherContext";
import { useContext } from "react";


function Warning() {
  const { alertMessage } = useContext(WeatherContext);

  return (
      <p className="alert-danger w-25 mx-auto px-5">{alertMessage}</p>
  );
}

export default Warning




