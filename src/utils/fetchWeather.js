export default async function fetchWeather(city) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("API key missing. Check your .env.local");
  }

  // Add &units=metric to get Celsius
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  const data = await res.json();
  console.log("API Response:", data); // Debug the temperature
  return data;
}
