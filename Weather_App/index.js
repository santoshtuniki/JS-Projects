import DATA from './config.json'  assert { type: "json" };

const searchValue = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherData = document.querySelector(".weather");
const errorMessage = document.querySelector(".error");

const weather_image = (weather) => {
    switch (weather) {
        case "Clear":
            return "images/clear.png";
        case "Clouds":
            return "images/clouds.png";
        case "Rain":
            return "images/rain.png";
        case "Drizzle":
            return "images/drizzle.png";
        case "Mist":
            return "images/mist.png";
        case "Snow":
            return "images/snow.png";
        default:
            return "images/clear.png";
    }
}

const check_weather = async (city) => {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${DATA.KEY}`;

    try {
        const response = await fetch(api_url);
        const data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `<span>${Math.round(data.main.temp)} &deg;C</span>`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        weatherIcon.src = weather_image(data.weather[0].main);
        weatherData.style.display = "block";
        errorMessage.style.display = "none";
    } catch (error) {
        // console.log("Error while fetching weather data...\n", error);
        errorMessage.style.display = "block";
        weatherData.style.display = "none";
    }
    searchValue.value = '';
}

searchValue.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        check_weather(searchValue.value)
    }
});
searchBtn.addEventListener("click", (e) => check_weather(searchValue.value));
