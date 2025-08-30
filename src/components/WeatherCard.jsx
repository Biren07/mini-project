export default function WeatherCard({ weather }) {
  if (!weather || !weather.main || !weather.weather) {
    return <p className="text-red-500">No weather data available ❌</p>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg p-6 rounded-2xl w-80 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      
      {/* City Name */}
      <h2 className="text-2xl font-bold mb-2 animate-bounce">
        {weather.name}
      </h2>

      {/* Temperature */}
      <p className="text-4xl font-extrabold mb-2 animate-pulse">
        🌡️ {Math.round(weather.main.temp)}°C
      </p>

      {/* Weather Description */}
      <p className="text-lg capitalize mb-2 animate-fadeIn">
        {weather.weather[0].description}
      </p>

      {/* Wind & Humidity */}
      <p className="text-sm opacity-90 animate-fadeIn">
        💨 {weather.wind.speed} m/s | 💧 {weather.main.humidity}%
      </p>
    </div>
  );
}
