import React, { useState } from "react";

function Comp1() {
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState(null);

    const fetchWeather = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e259373c8658a32d2ac0ae619d4fc8d2&units=metric`
            );
            const data = await res.json();
            setTemp(data.main.temp);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={fetchWeather}>
                <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                />
                <button type="submit">Search</button>
            </form>
            <p>{city && <b>City: {city}</b>}<br />
            {temp !== null && <h2>Temperature: {temp}°C</h2>}</p>
        </div>
    );
}

export default Comp1;
