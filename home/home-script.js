const pr = document.querySelector('#pr');
pr.addEventListener('click', () => document.getElementById('projectsBegin').scrollIntoView());
const ab = document.querySelector('#ab');
ab.addEventListener('click', () => window.scrollTo(pageXOffset, 0));


const lang = document.querySelector('#lang');
let langN = 1;

const phr1 = document.querySelector('#ab');
const phr2 = document.querySelector('header section a');
const phr3 = document.querySelector('#pr');
const phr4 = document.querySelector('.about .info h1');
const phr5 = document.querySelector('.about .info p');
const phr6 = document.querySelector('.projects h2');
const phr7 = document.querySelector('#pr1 p');
const phr8 = document.querySelector('#pr2 p');
const phr9 = document.querySelector('#pr3 p');
const phr10 = document.querySelector('#pr4 p');
const phr11 = document.querySelector('#pr5 p');
const phr12 = document.querySelector('#pr6 p');

lang.addEventListener('click', () => {
    if (langN === 1) {
        phr1.innerHTML = "Обо мне";
        phr2.innerHTML = "Резюме";
        phr3.innerHTML = "Проекты";
        phr4.innerHTML = "Сергей Бурлаков";
        phr5.innerHTML = "Фронтэнд-разработчик.<br>22 года.<br>Санкт-Петербург, Россия.";
        phr6.innerHTML = "Веб-проекты";
        phr7.innerHTML = "Погода<br>Узнайте погоду в своем городе.<br>Температура, влажность, ветер.";
        phr8.innerHTML = "Мировое время<br>Текущее время по геопозиции.<br>Можно проверить время в других городах.";
        phr9.innerHTML = "Конвертер валют<br>Актуальный курс центробанка.<br>Перевод из USD, EUR, BYN в рубли.";
        phr10.innerHTML = "Tap the squirrel<br>Нажимайте на белку и пытайтесь набрать<br>как можно больше очков!";
        phr11.innerHTML = "Paper-Scissors-Rock<br>Всемирно известная игра.<br>Поиграйте с компьютером.";
        phr12.innerHTML = "Flappy Angry<br>Не задевайте палки!<br>Основана на популярном приложении.";
        langN = 2;
    }
    else if (langN === 2) {
        phr1.innerHTML = "About me";
        phr2.innerHTML = "Resume";
        phr3.innerHTML = "Projects";
        phr4.innerHTML = "Sergey Burlakov";
        phr5.innerHTML = "Junior frontend-developer.<br>22 years old.<br>Saint-Petersburg, Russia.";
        phr6.innerHTML = "Web-projects";
        phr7.innerHTML = "Weather App<br>Check the weather in your city.<br>Temperature, humidity, wind speed.";
        phr8.innerHTML = "World Time<br>Current time from geoposition.<br>Also check it in others cities.";
        phr9.innerHTML = "Valute converter<br>Actual central bank course.<br>Convert USD, EUR, BYN to RUB.";
        phr10.innerHTML = "Tap the squirrel<br>Click on the squirrel and try to score<br>as many points as possible!";
        phr11.innerHTML = "Paper-Scissors-Rock<br>Popular world-wide game.<br>Play with computer.";
        phr12.innerHTML = "Flappy Angry<br>Don't hit the sticks!<br>Based on the famous app.";
        langN = 1;
    }
});


document.getElementById("rad1").addEventListener("click", () => {
    document.getElementById("manual-btn1").style.background = "white";
    document.getElementById("manual-btn2").style.background = "none";
    document.getElementById("manual-btn3").style.background = "none";
    document.getElementById("slide1").style.margin = "0";
    counter = 1;
});
document.getElementById("rad2").addEventListener("click", () => {
    document.getElementById("manual-btn1").style.background = "none";
    document.getElementById("manual-btn2").style.background = "white";
    document.getElementById("manual-btn3").style.background = "none";
    document.getElementById("slide1").style.margin = "0 0 0 -300px";
    counter = 2;
});
document.getElementById("rad3").addEventListener("click", () => {
    document.getElementById("manual-btn1").style.background = "none";
    document.getElementById("manual-btn2").style.background = "none";
    document.getElementById("manual-btn3").style.background = "white";
    document.getElementById("slide1").style.margin = "0 0 0 -600px";
    counter = 3;
});

let counter = 2;
setInterval(function (){
    if(counter === 1) {
        document.getElementById("slide1").style.margin = "0";
        document.getElementById("manual-btn1").style.background = "white";
        document.getElementById("manual-btn2").style.background = "none";
        document.getElementById("manual-btn3").style.background = "none";
    }
    else if(counter === 2) {
        document.getElementById("slide1").style.margin = "0 0 0 -300px";
        document.getElementById("manual-btn1").style.background = "none";
        document.getElementById("manual-btn2").style.background = "white";
        document.getElementById("manual-btn3").style.background = "none";
    }
    else if(counter === 3) {
        document.getElementById("slide1").style.margin = "0 0 0 -600px";
        document.getElementById("manual-btn1").style.background = "none";
        document.getElementById("manual-btn2").style.background = "none";
        document.getElementById("manual-btn3").style.background = "white";
    }
    counter++;
    if (counter > 3){counter = 1;}
}, 5000);










// let element = document.getElementById('rad2');
// element.addEventListener('mouseenter', function() {console.log('Event triggered')});
// let event = new MouseEvent('mouseenter');
// element.dispatchEvent(event);