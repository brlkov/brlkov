fetch("https://worldtimeapi.org/api/timezone/Europe/Moscow")
    .then((response) => response.json()).then((data) => {
    document.querySelector("#description").innerText = "UTC TIME";
    document.querySelector("#time").innerText = data.utc_datetime.substr(11, 5);
});


navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    console.log(lat,lon);
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=4e810e85523785651900de94481f89a7")
        .then((response) => response.json()).then((data) => {
        let plus = data.timezone / 3600;
        console.log(plus);
        setInterval(() => {fetch("https://worldtimeapi.org/api/timezone/Europe/Moscow")
            .then((response) => response.json()).then((data) => {
                document.querySelector("#description").innerText = "YOUR CURRENT TIME";
                if (Number(data.utc_datetime.substr(11, 2)) + plus >= 24) {plus = plus - 24}
                else if (Number(data.utc_datetime.substr(11, 2)) + plus <= 0) {plus = plus + 24}
                document.querySelector("#time")
                    .innerText = (Number(data.utc_datetime.substr(11, 2)) + plus)  + ":" + data.utc_datetime.substr(14, 5);
            })}, 1000);
    });
});


const time = (name, plus) => {
    fetch("https://worldtimeapi.org/api/timezone/Europe/Moscow")
        .then((response) => response.json()).then((data) => {
            console.log(data);
            document.querySelector("#searched-city p").innerText = "Time in " + name;
            if (Number(data.utc_datetime.substr(11, 2)) + plus >= 24) {plus = plus - 24}
            else if (Number(data.utc_datetime.substr(11, 2)) + plus <= 0) {plus = plus + 24}
            document.querySelector("#searched-city h2")
                .innerText = (Number(data.utc_datetime.substr(11, 2)) + plus)  + ":" + data.utc_datetime.substr(14, 5);
    })
}

searchTime = (city) => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4e810e85523785651900de94481f89a7")
        .then((response) => response.json()).then((data) => {
        console.log(data);
        let plus = data.timezone / 3600;
        const {name} = data;
        time(name, plus);
        const timer = setInterval(() => time(name, plus), 1000);
        document.querySelector(".search-button")
            .addEventListener("click", function () {clearInterval(timer)});
        document.querySelector(".search-bar")
            .addEventListener("keyup", function (event) {
                if (event.key === "Enter") {clearInterval(timer)}
            });
    });
}


document.querySelector(".search-button")
    .addEventListener("click", function () {
        searchTime(document.querySelector(".search-bar").value);
    });
document.querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key === "Enter") {searchTime(document.querySelector(".search-bar").value)}
    });



setInterval(() => {
    fetch("https://worldtimeapi.org/api/timezone/Europe/Moscow")
        .then((response) => response.json()).then((data) => {
        document.querySelector("#moscow p").innerText = "Time in Moscow";
        document.querySelector("#moscow h2").innerText = data.datetime.substr(11, 5);
    });
}, 1000);

setInterval(() => {
    fetch("https://worldtimeapi.org/api/timezone/Europe/London")
        .then((response) => response.json()).then((data) => {
        document.querySelector("#london p").innerText = "Time in London";
        document.querySelector("#london h2").innerText = data.datetime.substr(11, 5);
    });
}, 1000);

setInterval(() => {
    fetch("https://worldtimeapi.org/api/timezone/America/New_York")
        .then((response) => response.json()).then((data) => {
        document.querySelector("#new-york p").innerText = "Time in New-York";
        document.querySelector("#new-york h2").innerText = data.datetime.substr(11, 5);
    });
}, 1000);

setInterval(() => {
    fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
        .then((response) => response.json()).then((data) => {
        document.querySelector("#tokyo p").innerText = "Time in Tokyo";
        document.querySelector("#tokyo h2").innerText = data.datetime.substr(11, 5);
    });
}, 1000);










// searchTime = (city, a) => {
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4e810e85523785651900de94481f89a7")
//         .then((response) => response.json()).then((data) => {
//         console.log(data);
//         let plus = data.timezone / 3600;
//         const {name} = data;
//         clearInterval();
//         setInterval(() => {fetch("http://worldclockapi.com/api/json/utc/now")
//             .then((response) => response.json()).then((data) => {
//                 document.querySelector(`#sc${a} p`).innerText = "Time in " + name;
//                 if (Number(data.currentDateTime.substr(11, 2)) + plus >= 24) {plus = plus - 24}
//                 else if (Number(data.currentDateTime.substr(11, 2)) + plus <= 0) {plus = plus + 24}
//                 document.querySelector(`#sc${a} h2`).innerText = (Number(data.currentDateTime.substr(11, 2)) + plus)  + ":" + data.currentDateTime.substr(14, 2);
//             })}, 1000);
//     });
// }
//
//
// for (let i = 1; i <3; i ++) {
//     if (i === 1) {
//         document.querySelector(".search-button")
//             .addEventListener("click", function () {
//                 searchTime(document.querySelector(".search-bar").value, 1);
//                 i++;
//             })
//     }
//     if (i === 2) {
//         document.querySelector(".search-button")
//             .addEventListener("click", function () {
//                 searchTime(document.querySelector(".search-bar").value, 2);
//                 i++;
//             })
//     }
//     if (i === 3) {
//         document.querySelector(".search-button")
//             .addEventListener("click", function () {
//                 searchTime(document.querySelector(".search-bar").value, 3);
//                 document.getElementById("#searched-city").style.height = "0";
//                 i++;
//             })
//     }
// }