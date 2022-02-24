import React from "react";
import "./ForecastCard.css"

const ForecastCard = ({weathDay}) => {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="container">
        <div className="background">
          <div className="Circle1" />
          <div className="Circle2" />
          <div className="Circle3" />
          <div className="content">
            {/*<h1 className="Condition">
              <i className="material-icons sun">wb_sunny</i> Sunny
  </h1>*/}
            <h1 className="Temp">
              {weathDay.day&&weathDay.day.avgtemp_c}<span id="F">°C</span>
            </h1>
            <h1 className="Time">{weathDay.date}</h1>
            <h1 className="Location">
           <img src={`https:${weathDay.day&&weathDay.day.condition.icon}`} width="30px" /> {weathDay.day&&weathDay.day.condition.text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
