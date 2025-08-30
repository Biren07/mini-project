import fetchWaether from "@/utils/fetchWeather";
import { useState } from "react";

export default function useWeather()
{
    const[weather,setWeather]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    const fetchCityWeather=async(city)=>{
        setLoading(true);
        setError("");

        try {
            const data=await fetchWaether(city);
            if(data.cod==="404")
            {
            setError("city not found");
            setWeather(null);
            }
            else{
                setWeather(data);
            }

        } catch (error) {
            setError("Error fetching weather data");

        }
        setLoading(false);
    };

    return{weather,loading ,error,fetchCityWeather};
}