import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CurrentWeather from "./current/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import { getWeather } from "./js/actions/Actions";
function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("Gafsa");
  useEffect(() => {
    dispatch(getWeather(query));
  }, [query]);
  const [input, setInput] = useState("");
  
  const loading = useSelector((state) => state.weatherReducer.loading);
  const weather = useSelector((state) => state.weatherReducer.weather);
  const weatherForecast = useSelector((state) => state.weatherReducer.weather.forecast);
const handleSubmit=(e)=>{
  e.preventDefault()
  setQuery(input)
  setInput('')
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search a city"
        />
      </form>
      {loading ? (
        <progress></progress>
      ) : (
        <div>
          <CurrentWeather weather={weather} />{" "}
          <Forecast weatherForecast={weatherForecast} />
          
          
        </div>
      )}
    </div>
  );
}

export default App;
