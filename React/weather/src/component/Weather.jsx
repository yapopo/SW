import React from 'react';

const Weather = (props) => {

  return (
    <div>
      <div>{props.weather && props.weather.name}</div>
      <h2>{props.weather && props.weather.main.temp}'c</h2>
      <div>{props.weather && props.weather.wind.speed}풍속</div>
    </div>
  );
};

export default Weather;