import React from 'react'
import ForecastCard from './ForecastCard'

const Forecast = ({weatherForecast}) => {
  console.log(weatherForecast)
  const wather =weatherForecast && weatherForecast.forecastday
  console.log(wather)
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
          {wather? wather.map(weathDay =><ForecastCard weathDay={weathDay}/>): <ForecastCard weathDay={{}}/>}
        </div>
    )
}

export default Forecast
