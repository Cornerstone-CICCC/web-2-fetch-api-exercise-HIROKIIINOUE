const temperatureDisplay = document.querySelector("#temperature");
const timeZoneDisplay = document.querySelector("#time_zone");
const windSpeedDisplay = document.querySelector("#wind_speed");
const lastUpdatedDisplay = document.querySelector("#last_updated");
const date = new Date();

const fetchWeatherData = async () => {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1"
    );
    const weatherData = await res.json();
    const temperature = weatherData.current.temperature_2m;
    const windSpeed = weatherData.current.wind_speed_10m;
    const timeZone = weatherData.timezone;
    const lastUpdated = weatherData.current.time;
    const lastUpdatedDataList = lastUpdated.split("T");
    const year = lastUpdatedDataList[0].replace("-", "/");
    const yearCorrectDisplay = year.replace("-", "/");
    const time = lastUpdatedDataList[1];

    temperatureDisplay.textContent = `${temperature} ℃`;
    windSpeedDisplay.textContent = `Wind speed: ${windSpeed} km/h`;
    timeZoneDisplay.textContent = timeZone;
    lastUpdatedDisplay.textContent = `Last updated: ${yearCorrectDisplay} ${time}`;
    console.log(date);

    console.log(weatherData);
  } catch (error) {
    console.error(error);
  }
};

fetchWeatherData();
