import React, { useEffect, useState } from 'react';

function Weatherapp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2811075b23376c6928faebec434bc5f3`)
                    .then((response) => response.json())
                    .then((data) => setWeather(data))
            });
        }
    }, []);

    return (
        <div>
            {weather ? (
                <div>
                    <h2>Current Weather</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Weatherapp;
