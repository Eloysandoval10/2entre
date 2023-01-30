import React from 'react'
import "./Styles/Weathercard.css"

const WeatherCard = ({weather, temps, isCelsius, changeUnitTemp}) => {

  return (
    <section className='weatherCard'>
      <h1 className='weatherCard__title'>weather  App</h1>
      <h2 className='weatherCard__place'>{weather?.name}, <br /> {weather?.sys.country}</h2>
      <div className='weatherCard__home'>
        <div className='weatherCard__img'>
          <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          <h3 className='weatherCard__temp'>{isCelsius ? temps?.celsius + "ºC": temps?.fahrenheit + "ºF"} </h3>
        </div>
        <div>
          <ul className='weatherCard__list'>   
            <li className='weatherCard__dresciption'>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
            <li><span>wind speed:</span> {weather?.wind.speed} m/sec</li>
            <li><span>clouds:</span> {weather?.clouds.all} %</li>
            <li><span>pressure:</span> {weather?.main.pressure} hPa</li>
          </ul>
        </div>
        
      </div>
      <button onClick={changeUnitTemp} className='weatherCard__btn'>&deg;C / &deg;F</button> 
    </section>
  )
}

export default WeatherCard