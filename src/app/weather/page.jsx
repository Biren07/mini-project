'use client';

import WeatherCard from "@/components/WeatherCard";
import useWeather from "@/hooks/useWeather";
import { useState } from "react";

export default function weather()
{
    const [city,setCity]=useState("");
    const {weather,loading,error,fetchCityWeather}=useWeather();

    const handleSearch=()=>{
        if(city.trim())
        {
            fetchCityWeather(city);
        }
    }
    return(
        <main className="flex flex-col items-center min-h-screen p-6 ">
            <h1 className="text-3xl font-bold mb-6">🌤️ Weather App</h1>

            {/* Input button */}

            <div className="flex gap-2 mb-6">
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} 
                placeholder="Enter the city name..."
                className="px-3 py-2 border rounded-md w-50"/>
                <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded-md">search</button>
            </div>

            {/* Loading */}
            {loading&&<p className="text-gray-600">Loading...</p>}

            {/* Error */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Result weather */}
            {weather && <WeatherCard weather={weather}/>}
        </main>
    )
}