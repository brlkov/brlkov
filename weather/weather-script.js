let weather = {
    apiKey: "4e810e85523785651900de94481f89a7",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey)
            .then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        console.log(data);
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector('.city').innerText = name;
        document.querySelector('.temp').innerText = Math.round(temp - 273) + " °C";
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + " %";
        document.querySelector('.wind').innerText = "Wind speed: " + speed + " m/s";
        document.getElementsByClassName('card')[0].style.height = "220px";

        // if (icon === "01d" || icon === "01n") document.getElementsByClassName('card')[0]
        //     .style.background = "url('../images/clear.jpg') no-repeat center center";
        // else if (icon === "02d" || icon === "02n" || icon === "03d" || icon === "03n" || icon === "04d" || icon === "04n") document.getElementsByClassName('card')[0]
        //     .style.background = "url('../images/cloudy.jpg') no-repeat center center";

        },
    search: function () {this.fetchWeather(document.querySelector(".search-bar").value)}
    }

document.querySelector(".search-button")
        .addEventListener("click", function () {weather.search();});
document.querySelector(".search-bar")
        .addEventListener("keyup", function () {
            if (event.key === "Enter") {weather.search();}})
weather.fetchWeather("Санкт-Петербург");