import React from 'react'
import './CurrentWeather.css'




const CurrentWeather = ({weather}) => {
  console.log(weather)
    return (
        <div>
            <div className="widget">
  <div className="left-panel panel">
    <div classname="date">
    {weather.location && weather.location.localtime}
    </div>
    <div className="city">
      {weather.location && weather.location.name}
    </div>
    <div className="temp">
      <img src={`https:${weather.current&&weather.current.condition.icon}`} alt width={60} />
      {weather.current && weather.current.temp_c}°
    </div>
  </div>
  <div className="right-panel panel">
    <img src="https://s5.postimg.cc/lifnombwz/mumbai1.png" alt width={160} />
  </div>
</div>

        </div>
    )
}

export default CurrentWeather
