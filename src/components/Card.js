import axios from 'axios'
import '../css/card.css'
import { useState } from 'react'

function Card() {
    const [city, setCity] = useState('');
    const [data, setData] = useState({
        city: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: ""
    })
    const handleOnClick = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d8596b1261b43be39522177d29112a96`).then((response) => {
            setData({
                desc:response.data.weather[0].main,
                icon:response.data.weather[0].icon,
                city: response.data.name,
                temp: response.data.main.temp,
                temp_max: response.data.main.temp_max,
                temp_min: response.data.main.temp_min,
                humidity: response.data.main.humidity,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset,
                country: response.data.sys.country,
                windSpeed: response.data.wind.speed
            })
        })
    }
    return (
        <div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className='container'>
                <div className="card">
                    <div className="inputData">
                        <input
                            type="text"
                            className='inputField'
                            placeholder='Enter City Name'
                            value={city}
                            onChange={(event) => {
                                setCity(event.target.value)
                            }}
                        />
                        
                        <button className='btn' onClick={handleOnClick} type='submit'>Search</button>
                    </div>
                    {
                        !city ? (
                            <>

                                <div className="city">
                                    <h3> Please Enter the name of city</h3>
                                </div>
                                <div className="info">
                                    <h2>0 °C</h2>
                                </div>
                                <div className="boxes">
                                    <div className="box"><h4>Max Temp 
                                        <span>  <i className="fa-solid fa-temperature-arrow-up"></i></span></h4>
                                        <h3>{0} °C</h3></div>
                                    <div className="box"><h4>Min Temp
                                        <span>  <i className="fa-solid fa-temperature-arrow-down"></i></span></h4>
                                        <h3>{0} °C</h3></div>
                                    <div className="box">
                                        <h4>Humidity</h4>
                                        <h2>{0}</h2></div>
                                    <div className="box"><h3>Feels like</h3>
                                        <h2>{"--"}</h2></div>
                                </div>
                            </>
                        ) : (
                            <>
                                    <div className="city">
                                    <h3><i className="fa-sharp fa-solid fa-location-dot"></i> {data.city}  {data.country}</h3>
                                </div>
                                <div className="info">
                                    <h2>{data.temp} °C</h2>
                                </div>
                                <div className="boxes">
                                        <div className="box"><h4>Max Temp
                                            <span>  <i className="fa-solid fa-temperature-arrow-up"></i></span></h4>
                                        <h3>{data.temp_max} °C</h3></div>
                                        <div className="box"><h4>Min Temp
                                            <span>  <i className="fa-solid fa-temperature-arrow-down"></i></span></h4>
                                        <h3>{data.temp_min} °C</h3></div>
                                        <div className="box"><h4>Humidity</h4>
                                        <h3>{data.humidity}</h3></div>
                                    <div className="box"><h3>Feels Like</h3>
                                            <h3>{data.desc}</h3></div>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>

    )
}

export default Card
